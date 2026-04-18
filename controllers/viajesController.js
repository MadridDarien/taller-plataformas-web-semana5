const viajes = require("../data/viajes");

exports.obtenerViajes = (req, res) => {
    res.json(viajes);
};
