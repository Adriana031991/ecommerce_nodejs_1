const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('User', userSchema);