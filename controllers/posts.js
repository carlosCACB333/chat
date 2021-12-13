
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)
const Post = require('../models/posts')

const newPost = async (req, res) => {
    const user = req.user
    const picture = req.files?.picture
    const post = Post({ ...req.body, user: user._id })
    if (picture) {
        try {
            const { secure_url } = await cloudinary.uploader.upload(picture.tempFilePath, { folder: "bonny/" })
            post.picture = secure_url
        } catch (error) {
            res.status(404).json({ msg: error.message })
        }
    }
    await post.save()

    res.json(await post.populate({ path: 'user' }))
}

const getPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({ $or: [{ type: 'public' }, { user: user._id }] }).populate({ path: 'user' }).populate({ path: 'likes' }).sort({ createdAt: 'desc' })
    res.json(posts)
}

const toLike = async (req, res) => {
    const user = req.user
    const id = req.body.id

    try {
        let post = await Post.findById(id)
        if (post.likes.includes(user._id)) {
            post = await Post.findByIdAndUpdate(id, { $pull: { likes: user._id } }, { new: true }).populate({ path: 'user' }).populate({ path: 'likes' })
        } else {
            post = await Post.findByIdAndUpdate(id, { $push: { likes: user._id } }, { new: true }).populate({ path: 'user' }).populate({ path: 'likes' })
        }

        return res.json(post)
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }

}


module.exports = { newPost, getPosts, toLike }