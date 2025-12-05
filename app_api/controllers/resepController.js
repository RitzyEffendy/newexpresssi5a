const resepSchema = require('../models/resep');

const getAllResep = async (req, res) => {
    try {
        const result = await resepSchema.find().populate('kategori_id', 'kategoriResep deskripsi');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Resep not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Resep not found' });
        } else {
            if(req.body.namaResep != null){
                result.namaResep = req.body.namaResep;
            }
            if(req.body.negara != null){
                result.negara = req.body.negara;
            }
            if(req.body.bahan != null){
                result.bahan = req.body.bahan;
            }
            const updatedResep = await result.save();
            res.status(200).json(updatedResep);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Resep not found' });
        } else {
            await result.deleteOne();
            res.status(200).json({message: 'Resep berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createResep = async (req, res)=> {
    const resep = new resepSchema({
        namaResep: req.body.namaResep,
        negara: req.body.negara,
        bahan: req.body.bahan
    })
    
    const hasil = await resep.save();
    res.status(201).json(hasil);
}

module.exports = { getAllResep, getAllResepById, updateResepById, deleteAllResepById, createResep };