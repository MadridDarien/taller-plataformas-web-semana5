const express = require('express');
const router = express.Router();
const {login, logout} = require('../controllers/authController');

// Ruta de login
router.post('/login', login);

// Ruta de logout
router.post('/logout', logout);

module.exports = router;
