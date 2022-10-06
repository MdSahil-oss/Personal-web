const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Projects', projectSchema);