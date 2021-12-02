
const Message = require('../models/message')
const mongoose = require('mongoose')

const getMessages = async (req, res) => {

    const user = req.user
    const from = req.params.from

    const messages = await Message.find({
        $or: [
            { from: from, to: user.id },
            { from: user.id, to: from },
        ]
    }).populate({ path: 'from' }).populate({ path: 'to' }).sort({ createdAt: 'asc' }).limit(10)


    res.json(messages)

}

const getMessageGroup = async (req, res) => {
    const user = req.user;
    const from = req.params.from;


    const messages = await Message.aggregate(
        [
            {
                $match: {
                    $or: [
                        { 'from': new mongoose.mongo.ObjectId(user.id) },
                        { 'to': new mongoose.mongo.ObjectId(user.id) },
                    ]
                }
            },
            { "$sort": { "createdAt": 1 } },
            {
                $group: {
                    _id: {
                        $cond: [{ $eq: ['$from', new mongoose.mongo.ObjectId(user.id)] }, '$to', '$from']
                    },
                    sendMe: {
                        '$last': {
                            $cond: [{ $eq: ['$from', new mongoose.mongo.ObjectId(user.id)] }, false, true]
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
            // {
            //     $lookup: {
            //         from: 'users',
            //         localField: 'to',
            //         foreignField: '_id',
            //         as: 'to'
            //     }
            // },,
            // {
            //     $unwind: '$to'
            // }
            ,
            {
                $project: {
                    _id: '$_id', sendMe: '$sendMe', content: '$content', createdAt: '$createdAt',
                    username: '$user.username', firstName: '$user.firstName', lastName: '$user.lastName', email: '$user.email',
                    online: '$user.online', lastLogin: '$user.lastLogin',
                }
            },
            { $unwind: '$username' },
            { $unwind: '$firstName' },
            { $unwind: '$lastName' },
            { $unwind: '$email' },
            { $unwind: '$online' },
            { $unwind: '$lastLogin' },
        ]
    )


    res.json(messages)

}


module.exports = { getMessages, getMessageGroup }