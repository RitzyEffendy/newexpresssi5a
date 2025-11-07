const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user")

// Fungsi utk pengguna baru
exports.register = async (req, res) => {
    const {name, email, password, role} = req.body;

    try{
        let user = await user.findOne({email});
        if (user) {
            return res.status(400).json({message : "User already exist"});
        }

        user = new user({name, email, password, role});
        await user.save();

        const payload = {userID: user.id, role: user.role};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.json({token});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

// Fungsi login user
exports.login = async (req, res) => {
    const {email, password} = req.body;

    try{
        let user = await user.findOne({email});
        if (!user) {
            return res.status(400).json({message : "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message : "Invalid email or password"});
        }

        const payload = {userID: user.id, role: user.role};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.json({token});
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};