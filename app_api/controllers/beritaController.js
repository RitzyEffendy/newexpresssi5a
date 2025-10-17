// Import model Berita
const berita = require("../models/berita")

// Fungsi untuk mengambil semua isi collection berita
const getAllBerita = async (req, res) => {
    try {
        // GET collection berita
        const result = await berita.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Export
module.exports = {getAllBerita}