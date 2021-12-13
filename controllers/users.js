const User = require('../models/user')

const toFollow = async (req, res) => {
    let me = req.user
    const id = req.body.id
    try {
        let user = await User.findById(id)
        if (user.followers?.includes(me._id)) {
            user = await User.findByIdAndUpdate(id, { $pull: { followers: me._id } }, { new: true }).populate('followers').populate('following')
            me = await User.findByIdAndUpdate(me._id, { $pull: { following: id } }, { new: true }).populate('followers').populate('following')
        } else {
            user = await User.findByIdAndUpdate(id, { $push: { followers: me._id } }, { new: true }).populate('followers').populate('following')
            me = await User.findByIdAndUpdate(me._id, { $push: { following: id } }, { new: true }).populate('followers').populate('following')
        }
        return res.json({ user, me })
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}


const userDetail = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id).populate('followers').populate('following')
    res.json(user)
}

module.exports = { toFollow, userDetail }