const { model, Schema, Types: {ObjectId} } = require('mongoose');

const schema = new Schema({
    Type: {
        type: String,
        default: ''
    },
    Sum: {
        type: Number,
        default: 0
    },
    BalanceBefore: {
        type: Number,
        default: 0
    },
    BalanceAfter: {
        type: Number,
        default: 0
    },
    Date: {
        type: Date,
        default: new Date()
    },
    Description: {
        type: String
    },
    User: {
        type: ObjectId,
        ref: 'Customer'
    }
}) 

module.exports = model('operationType', schema)