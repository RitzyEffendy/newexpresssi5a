// Import model Fakultas
const fakultas = require("../models/fakultas")

// Fungsi untuk mengambil semua isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // GET collection fakultas
        const result = await fakultas.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Export
module.exports = {getAllFakultas}