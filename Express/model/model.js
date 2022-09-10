const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    logo: {
        required: false,
        data: Buffer,
        contentType: String
    },
    icon: {
        required: false,
        type: String
    },
    usedTechnologies: {
        required: true,
        type: Array
    },
    desciption: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Projects', dataSchema);