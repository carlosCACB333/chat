const { model, Schema } = require("mongoose")

const PostSchema = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    picture: { type: String, },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    type: { type: String, required: true, enum: ['public', 'private', 'follow'], default: 'public' }
}, { timestamps: true })

PostSchema.methods.toJSON = function () {
    const { __v, ...post } = this.toObject();
    return post
}

module.exports = model('Post', PostSchema);