const express = require("express");
const router = express.Router();

// Rutas exclusivas del usuario VIP
router.get("/ofertas/vip", (req, res) => {
  res.send("Ruta: Ofertas VIP");
});

router.get("/consultas/vip", (req, res) => {
  res.send("Ruta: Consultas VIP");
});

router.get("/ejecutivo", (req, res) => {
  res.send("Ruta: Atención de ejecutivo VIP");
});

module.exports = router;
