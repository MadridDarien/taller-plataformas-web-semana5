const express = require("express");
const router = express.Router();

// Rutas del usuario normal
router.get("/perfil", (req, res) => {
  res.send("Ruta: Perfil del usuario");
});

router.get("/viajes", (req, res) => {
  res.send("Ruta: Viajes del usuario");
});

router.get("/ofertas", (req, res) => {
  res.send("Ruta: Ofertas disponibles");
});

router.get("/reservas", (req, res) => {
  res.send("Ruta: Reservas del usuario");
});

router.get("/contacto", (req, res) => {
  res.send("Ruta: Contacto / Consultas");
});

module.exports = router;
