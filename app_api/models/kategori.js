const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
    kategoriResep: {
        type: String,
        required: true,
        trim: true
    },
    deskripsi: {
        type: String,
        required: true,
        trim: true
    }
});

const kategori = mongoose.model('kategori', kategoriSchema);

module.exports = kategori;