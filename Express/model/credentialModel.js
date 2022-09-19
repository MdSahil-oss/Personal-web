const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    password: {
        required: true,
        contentType: String
    },
})

module.exports = mongoose.model('credential', credentialSchema);