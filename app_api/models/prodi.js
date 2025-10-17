const mongoose = require("mongoose"); // Impor mongoose

// Skema untuk collection prodi
const prodiSchema = new mongoose.Schema({
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
    fakultas_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Fakultas",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Sertakan skema prodi ke dalam model Prodi
const Prodi = mongoose.model("Prodi", prodiSchema)
// Ekspor model Prodi
module.exports = Prodi;