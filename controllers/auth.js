const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/web-token')

const authLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        // validar username
        const user = await User.findOne({ username }).populate('followers').populate('following')
        if (!user) { return res.status(400).json({ 'username': 'El usuario no existe' }) }
        // validar password
        const passValid = bcrypt.compareSync(password, user.password)
        if (!passValid) { return res.status(400).json({ 'password': 'Contraseña incorrecta' }) }
        // generar token
        const token = await generateJWT(user.id)
        res.json({ token, user })
    } catch (error) {
        res.status(500).json([{ 'error': error.message }])
    }
}

const authSinup = async (req, res) => {
    try {
        const userExs = await User.findOne({ username: req.body.username })
        if (userExs) { return res.status(400).json({ 'username': 'El usuario ya se encuentra registrado' }) }

        const user = User(req.body);
        // encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(req.body.password, salt);
        await user.save();
        // generar token
        const token = await generateJWT(user.id);

        res.json({ token, user })

    } catch (error) {
        res.status(500).json({ 'msg': error.message })
    }
}

const renewToken = async (req, res) => {
    const user = req.user
    // generar un nuevo token
    const token = await generateJWT(user.id)
    res.json({ token, user })
}


const searchUser = async (req, res) => {
    const user = req.user
    const { keyword = '' } = req.query
    const regex = RegExp(keyword, 'i');


    const users = await User.find({
        $or: [
            { username: regex },
            { firstName: regex },
            { lastName: regex },
            { email: regex }
        ],
        _id: { $ne: user._id },
        status: true
    }).populate('followers').populate('following').sort({ 'online': -1 }).limit(6)

    res.json(users)
}

module.exports = { authLogin, authSinup, renewToken, searchUser }