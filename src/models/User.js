const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: ({ type: Number }),
    display: {
        type: Boolean,
        required: true,
        default: true
    }

});

module.exports = mongoose.model('User', UserSchema);