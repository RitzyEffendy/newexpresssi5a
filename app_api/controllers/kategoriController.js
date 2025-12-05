const kategoriSchema = require('../models/kategori');

const getAllKategori = async (req, res) => {
    try {
        const result = await kategoriSchema.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Kategori not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Kategori not found' });
        } else {
            if(req.body.kategoriResep != null){
                result.kategoriResep = req.body.kategoriResep;
            }
            if(req.body.deskripsi != null){
                result.deskripsi = req.body.deskripsi;
            }
            const updatedKategori = await result.save();
            res.status(200).json(updatedKategori);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Kategori not found' });
        } else {
            await result.deleteOne();
            res.status(200).json({message: 'Kategori berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createKategori = async (req, res)=> {
    const kategori = new kategoriSchema({
        kategoriResep: req.body.kategoriResep,
        deskripsi: req.body.deskripsi
    })
    
    const hasil = await kategori.save();
    res.status(201).json(hasil);
}

module.exports = { getAllKategori, getAllKategoriById, updateKategoriById, deleteAllKategoriById, createKategori };