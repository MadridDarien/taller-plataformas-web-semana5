const express = require("express");
const router = express.Router();

// Rutas del administrador
router.get("/ofertas/crear", (req, res) => {
  res.send("Ruta: Crear ofertas");
});

router.get("/paquetes/crear", (req, res) => {
  res.send("Ruta: Crear paquetes turísticos");
});

router.get("/consultas/responder", (req, res) => {
  res.send("Ruta: Responder consultas de usuarios");
});

module.exports = router;
