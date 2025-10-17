const mongoose = require("mongoose"); // Impor mongoose

// Skema untuk collection berita
const beritaSchema = new mongoose.Schema({
    judul: {
        type: String,
        require: true, // Wajib diisi
        trim: true,
    },
    deskripsi: {
        type: String,
        require: true,
        trim: true,
    },
    isi: {
        type: String,
        require: true,
        trim: true,
    },
    tanggal: {
        type: Date,
        default: Date.now,
    },
});
// Sertakan skema berita ke dalam model Berita
const Berita = mongoose.model("Berita", beritaSchema)
// Ekspor model Berita
module.exports = Berita;