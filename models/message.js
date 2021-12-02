const { Schema, model } = require('mongoose')

const MessageSchema = Schema({
    from: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    content: { type: String, require: true },
    status: { type: String, default: 'ENVIADO' },
    removed: { type: Boolean, default: false },
}, { timestamps: true })


MessageSchema.methods.toJSON = function () {
    const { __v, ...message } = this.toObject()
    return message
}
module.exports = model('Message', MessageSchema)