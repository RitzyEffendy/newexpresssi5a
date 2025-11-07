const jwt = require("jsonwebtoken");

// Middleware untuk verifikasi JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Mendapatkan token dari header auth
    if (!token) {
        //Jika token tidak ada
        return res.status(401).json({message : "No token, Authorization denied"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verif token dgn secret
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message : "Token is not valid"});
    }
};

module.exports = authMiddleware;