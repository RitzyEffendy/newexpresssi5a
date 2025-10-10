const mongoose = require("mongoose"); // Impor mongoose

// Skema untuk collection fakultas
const fakultasSchema = new mongoose.Schema({
    nama: {
        type: String,
        require: true, // Wajib diisi
        trim: true,
    },
    singkatan: {
        type: String,
        require: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Sertakan skema fakultas ke dalam model Fakultas
const Fakultas = mongoose.model("Fakultas", fakultasSchema)
// Ekspor model Fakultas
module.exports = Fakultas;