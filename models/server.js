require('dotenv').config();
const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const cors = require('cors')
const { dbconexion } = require('../db/db-config');
const { checkToken } = require('../helpers/web-token');
const { connectedUser, disconnectedUser, listUsers, saveMessage, listMessages } = require('../controllers/socket');
const fileUpload = require('express-fileupload');
const path = require('path');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // conexion a la vase de datos
        dbconexion();

        this.server = http.createServer(this.app)
        this.io = socketio(this.server, {})
        this.execute()
    }

    middleware() {
        // cors
        this.app.use(cors())

        this.app.use(express.json())

        // ruta publica
        // this.app.use(express.static('public'))
        console.log(__dirname);
        this.app.use(express.static('public'));
        this.app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../public', 'index.html')); });

        //configurando carga de archivos 
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true,
        }));

    }

    routes() {
        this.app.use('/api/auth', require('../routes/auth'));
        this.app.use('/api/message', require('../routes/message'));
        this.app.use('/api/post', require('../routes/posts'));
        this.app.use('/api/user', require('../routes/users'));
    }

    socketsEvents() {
        this.io.on('connection', async (socket) => {
            const token = socket.handshake.query.token
            // TODO: validar token
            const uid = checkToken(token)
            // TODO: desconectar si no es valido el token
            if (!uid) {
                console.log('token no valido');
                return socket.disconnect()
            }

            await connectedUser(uid)
            // TODO: unirme en una sala
            socket.join(uid)

            // TODO: emitir todo los usuarios conectados
            this.io.emit('list-users', await listUsers(uid))
            // emitit todo los mensajes del usuarios
            this.io.to(uid).emit('list-messages', await listMessages(uid))
            // TODO: escuchar cuando un user manda mensaje
            socket.on('send-message', async (payload) => {
                const message = await saveMessage(payload)
                this.io.to(message.to.id).emit('receive-message', message)
                this.io.to(message.from.id).emit('receive-message', message)
                this.io.to(message.to.id).emit('list-messages', await listMessages(message.to.id))
                this.io.to(message.from.id).emit('list-messages', await listMessages(message.from.id))
            })

            socket.on('typing', ({ from, to }) => {
                this.io.to(to).emit('typing', from)
            })
            socket.on('not-typing', ({ from, to }) => {
                this.io.to(to).emit('not-typing', from)
            })

            // TODO: desconectar
            // TODO: emitit todo los usuarios conectados
            socket.on('disconnect', async () => {
                await disconnectedUser(uid)
                this.io.emit('list-users', await listUsers())

            })

            // emitir todo los mensajes de los usuarios


        })

    }

    execute() {
        this.middleware()
        this.routes()
        this.socketsEvents()
        this.server.listen(this.port, () => {
            console.log('corriendo en el puerto ', this.port);
        })
    }
}

module.exports = Server;