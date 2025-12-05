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
    },
    resep_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'resep'
    }
});

const kategori = mongoose.model('kategori', kategoriSchema);

module.exports = kategori;