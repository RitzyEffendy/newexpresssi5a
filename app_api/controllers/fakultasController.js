// Import model Fakultas
const fakultasSchema = require("../models/fakultas")

// Fungsi untuk mengambil semua isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // GET collection fakultas
        const result = await fakultasSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createFakultas = async (req, res) => {
    // Buat instance fakultas baru
    const fakultas = new fakultasSchema({
        nama: req.body.nama,
        singkatan: req.body.singkatan
    })

    // Simpan data fakultas ke dalam collection
    const hasil = await fakultas.save();
    // Beri response json HTTP_CREATED
    res.status(201).json(hasil);
}

// Export
module.exports = {getAllFakultas, createFakultas}