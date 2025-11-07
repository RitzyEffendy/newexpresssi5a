// Role
const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if (req.user && req.user.role === requiredRole) {
            // Jika pengguna rolenya sesuai
            next();
        } else {
            // Jika role tdk sesuai
            res.status(403).json({message : "Access denied"});
        }
    };
};

module.exports = roleMiddleware;