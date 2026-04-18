const express = require("express");
const router = express.Router();

// Rutas del técnico
router.get("/sistema", (req, res) => {
  res.send("Ruta: Información general del sistema");
});

router.get("/logs", (req, res) => {
  res.send("Ruta: Logs del sistema");
});

router.get("/diagnosticos", (req, res) => {
  res.send("Ruta: Diagnósticos técnicos");
});

router.get("/usuarios/listar", (req, res) => {
  res.send("Ruta: Listado de usuarios (solo técnico)");
});

module.exports = router;
