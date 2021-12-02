const User = require('../models/user')
const Message = require('../models/message')
const mongoose = require('mongoose')

const connectedUser = async (uid) => {
    return await User.findByIdAndUpdate(uid, { online: true }, { new: true });
}
const disconnectedUser = async (uid) => {
    return await User.findByIdAndUpdate(uid, { online: false, lastLogin: new Date() }, { new: true });
}


const listUsers = async () => {
    return await User.find({ status: true }).sort({ 'online': -1, lastLogin: -1 }).limit(6);
}

const saveMessage = async (msg) => {
    try {
        const message = await Message({ ...msg })
        message.save();
        await message.populate({ path: 'from' })
        return await message.populate({ path: 'to' })
    } catch (error) {
        console.log(error);
        return null
    }
}



const listMessages = async (id) => {

    return await Message.aggregate(
        [
            {
                $match: {
                    $or: [
                        { 'from': new mongoose.mongo.ObjectId(id) },
                        { 'to': new mongoose.mongo.ObjectId(id) },
                    ]
                }
            },
            { "$sort": { "createdAt": 1 } },
            {
                $group: {
                    _id: {
                        $cond: [{ $eq: ['$from', new mongoose.mongo.ObjectId(id)] }, '$to', '$from']
                    },
                    sendMe: {
                        '$last': {
                            $cond: [{ $eq: ['$from', new mongoose.mongo.ObjectId(id)] }, false, true]
                        }
                    },
                    "content": { "$last": "$content" },
                    "createdAt": { "$last": "$createdAt" },
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'user'
                }
            }
            ,
            {
                $project: {
                    _id: '$_id', sendMe: '$sendMe', content: '$content', createdAt: '$createdAt',
                    username: '$user.username', firstName: '$user.firstName', lastName: '$user.lastName', email: '$user.email',
                    online: '$user.online', lastLogin: '$user.lastLogin', picture: '$piture'
                }
            },
            { "$sort": { "createdAt": -1 } },
            { $unwind: '$username' },
            { $unwind: '$firstName' },
            { $unwind: '$lastName' },
            { $unwind: '$email' },
            { $unwind: '$online' },
            { $unwind: '$lastLogin' },
        ]
    )
}



module.exports = { connectedUser, disconnectedUser, listUsers, saveMessage, listMessages }