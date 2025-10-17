const mongoose = require("mongoose"); // Impor mongoose

// Skema untuk collection mahasiswa
const mahasiswaSchema = new mongoose.Schema({
    npm: {
        type: String,
        require: true, // Wajib diisi
        trim: true,
    },
    nama: {
        type: String,
        require: true,
        trim: true,
    },
    tempat_lahir: {
        type: String,
        require: true,
        trim: true,
    },
    tanggal_lahir: {
        type: String,
        require: true,
        trim: true,
    },
    prodi_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Prodi",
        required: true,
    },
});
// Sertakan skema
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema)
// Ekspor model
module.exports = Mahasiswa;