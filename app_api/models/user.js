const mongoose = require("mongoose"); // Impor mongoose
const bcrypt = require("bcryptjs");

// Skema untuk collection user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Wajib diisi
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"], // Role terbatas admin dan user
        default: "user",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Fungsi untuk enkripsi password sebelum menyimpan pengguna
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        // Jika password tidak diubah, lanjut tanpa enkripsi
        return next();
    }
    const salt = await bcrypt.genSalt(10); // Membuat salt untuk enkripsi password
    this.password = await bcrypt.hash(this.password, salt); // Mengenkripsi password
    next();
});

module.exports = mongoose.model("user", userSchema);