const jwt = require('jsonwebtoken')
const User = require('../models/user')


const validateJWT = async (req, res, next) => {

    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ 'msg': 'No se envió el token' })
    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findById(uid).populate('followers').populate('following')
        if (!user) { return res.status(401).json({ 'msg': 'El usuario no existe' }) }

        if (!user.status) { return res.status(401).json({ 'msg': 'El usuario está bloqueado' }) }

        req.user = user
        next();
    } catch (error) {
        return res.status(401).json({ 'msg': 'Token inválido' })
    }

}

module.exports = { validateJWT }