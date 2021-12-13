const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstName: { type: String, erquire: true },
    lastName: { type: String, require: true },
    email: { type: String },
    online: { type: Boolean, default: false },
    lastLogin: { type: Date, default: new Date() },
    status: { type: Boolean, default: true },
    picture: { type: String },
    gender: { type: String, require: true, enum: ['Masculino', 'Femenino', 'Otro'], default: 'Otro' },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true })

UserSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject()
    return user
}

module.exports = model('User', UserSchema)