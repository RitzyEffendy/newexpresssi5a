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

// Fungsi untuk mengambil isi collection fakultas berdasarkan parameter ID
const getFakultasById = async (req, res) => {
    try {
        // GET collection fakultas parameter ID
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){
            // Jika ada fakultas tidak ada MongoDB
            res.status(404).json({ message: "Fakultas tidak ditemukan"})
        } else {
            // Jika data fakultas ada
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteFakultasById = async (req, res) => {
    try {
        // GET collection fakultas parameter ID
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){
            // Jika ada fakultas tidak ada di MongoDB
            res.status(404).json({ message: "Fakultas tidak ditemukan"})
        } else {
            // Jika data fakultas ada, maka hapus data fakultas berdasarkan Id
            await result.deleteOne();
            res.status(200).json({message: "Fakultas berhasil dihapus"})
        }
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



const updateFakultasById = async (req, res) => {
    try {
        // GET collection fakultas parameter ID
        const result = await fakultasSchema.findById(req.params.id)
        if(!result){ // Jika ada fakultas tidak ada MongoDB
            res.status(404).json({ message: "Fakultas tidak ditemukan"})
        } else { // Jika data fakultas ada
            // Jika ada request perubahan nama
            if(req.body.nama != null){
                result.nama = req.body.nama
            }
            // Jika ada request perubahan singkatan
            if(req.body.singkatan != null){
                result.singkatan = req.body.singkatan
            }
            // Update data fakultas
            const updateFakultas = await result.save()
            res.status(200).json(updateFakultas)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Export
module.exports = {getAllFakultas, getFakultasById, createFakultas, deleteFakultasById, updateFakultasById}