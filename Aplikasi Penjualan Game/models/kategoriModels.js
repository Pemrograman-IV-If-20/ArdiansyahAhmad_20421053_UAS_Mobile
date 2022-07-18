const mongoose = require('mongoose')

const kategoriModels = mongoose.Schema({
    namaKategori: {
        type: String,
    },
    keterangan: {
        type: String
    }
})

module.exports = mongoose.model('kategori', kategoriModels)