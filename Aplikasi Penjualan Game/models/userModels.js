const mongoose = require('mongoose')

const userModels = mongoose.Schema({
    namaLengkap: {
        type: String
    },
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
})

module.exports = mongoose.model('users', userModels)