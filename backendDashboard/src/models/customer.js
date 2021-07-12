const { model, Schema, Types: {ObjectId} } = require('mongoose');

const schema = new Schema({
    Login: {
        type: String,
        default: '',
        unique: true,
        required: true
    },
    Password: {
        type: String,
        default: '',
        required: true
    },
    Name: {
        type: String,
        default: ''
    },
    Surname: {
        type: String,
        default: ''
    },
    Balance: {
        type: Number,
        default: 0
    },
    Operations: [
        {
        type: ObjectId,
        ref: 'operationType'
        }
    ]
}) 

module.exports = model('Customer', schema)