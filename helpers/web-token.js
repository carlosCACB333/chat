const jwt = require('jsonwebtoken')

const generateJWT = (uid) => {

    return new Promise((resolve, reject) => {
        jwt.sign({ uid }, process.env.SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                reject({ message: "No se pudo generar el token" })
            } else {
                resolve(token)
            }
        })
    })
}


const checkToken = (token) => {

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY)
        return uid
    } catch (error) {
        return null
    }
}
module.exports = { generateJWT, checkToken }