const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const { obtenerViajes } = require("../controllers/viajesController");

// Ruta protegida: solo usuarios autenticados
router.get("/", authMiddleware, obtenerViajes);

// Ruta protegida por rol: solo administradores
router.get("/admin", authMiddleware, roleMiddleware(["administrador"]), (req, res) => {
    res.json({ message: "Bienvenido administrador, tienes acceso total a los viajes." });
});

// Ruta protegida por rol: solo técnicos
router.get("/tecnico", authMiddleware, roleMiddleware(["tecnico"]), (req, res) => {
    res.json({ message: "Bienvenido técnico, acceso autorizado." });
});

// Ruta protegida por rol: solo VIP
router.get("/vip", authMiddleware, roleMiddleware(["vip"]), (req, res) => {
    res.json({ message: "Bienvenido usuario VIP, acceso autorizado." });
});

module.exports = router;
