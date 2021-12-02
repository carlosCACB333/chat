const mongoose = require('mongoose');

const dbconexion = async () => {

    try {
        await mongoose.connect(process.env.MONGODB, {})
        console.log('conectado al la base de datos');
    } catch (error) {
        console.log(error.message);
        // throw new Error("no se pudo conectar a la base de datos");
    }
}

module.exports = { dbconexion }