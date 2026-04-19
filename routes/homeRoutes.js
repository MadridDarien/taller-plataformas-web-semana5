const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

router.get("/home", (req, res) => {
  res.send("Bienvenido al Home de AIEP, el trabajo de la semana 5");
});

module.exports = router;
