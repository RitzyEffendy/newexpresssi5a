// Import model Prodi
const prodi = require("../models/prodi")

// Fungsi untuk mengambil semua isi collection prodi
const getAllProdi = async (req, res) => {
    try {
        // GET collection prodi
        const result = await prodi.find().populate("fakultas_id", "nama singkatan")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Export
module.exports = {getAllProdi}