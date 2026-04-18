module.exports = (rolesPermitidos = []) => {
    return (req, res, next) => {
        const rolUsuario = req.user?.rol;

        if (!rolUsuario) {
            return res.status(403).json({ message: "Acceso denegado. No se encontró rol." });
        }

        if (!rolesPermitidos.includes(rolUsuario)) {
            return res.status(403).json({ message: "Acceso denegado. No tienes permisos suficientes." });
        }

        next();
    };
};
