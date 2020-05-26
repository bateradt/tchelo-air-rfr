const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : String,
    nome : String,
    senha : String
});

module.exports = mongoose.model('User', UserSchema);