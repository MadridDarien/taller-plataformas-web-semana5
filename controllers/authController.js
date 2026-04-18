const jwt = require("jsonwebtoken");
const users = require("../data/users");

exports.login = (req, res) => {
    const { usuario, password } = req.body;

    const user = users.find(u => u.usuario === usuario && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
        { id: user.id, usuario: user.usuario, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000
    });

    res.json({ message: "Login exitoso", rol: user.rol });
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Sesión cerrada correctamente" });
};
