const mongoose = require('mongoose');

const resepSchema = new mongoose.Schema({
    namaResep: {
        type: String,
        required: true,
        trim: true
    },
    negara: {
        type: String,
        required: true,
        trim: true
    },
    bahan: {
        type: String,
        required: true,
        trim: true
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategori'
    }
});

const resep = mongoose.model('resep', resepSchema);

module.exports = resep;