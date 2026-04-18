// pongo dotenv al inicio para que process.env esté disponible desde el arranque
require('dotenv').config();

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// ----------------------
// MIDDLEWARES BASE
// ----------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------
// RUTAS ORIGINALES
// ----------------------
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const viajesRoutes = require("./routes/viajesRoutes");

// Montaje de rutas originales
app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/viajes", viajesRoutes);

// ----------------------
// MIDDLEWARES DE AUTENTICACIÓN Y ROLES
// ----------------------
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

// ----------------------
// RUTAS POR ROL
// ----------------------
const usuarioRoutes = require("./routes/usuarioRoutes");
const usuarioVipRoutes = require("./routes/usuarioVipRoutes");
const adminRoutes = require("./routes/adminRoutes");
const tecnicoRoutes = require("./routes/tecnicoRoutes");

// Montaje de rutas protegidas
app.use(
  "/usuario",
  authMiddleware,
  roleMiddleware("usuario"),
  usuarioRoutes
);

app.use(
  "/vip",
  authMiddleware,
  roleMiddleware("vip"),
  usuarioVipRoutes
);

app.use(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  adminRoutes
);

app.use(
  "/tecnico",
  authMiddleware,
  roleMiddleware("tecnico"),
  tecnicoRoutes
);

// ----------------------
// SERVIDORES HTTP / HTTPS
// ----------------------
const HTTP_PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 8443;

let httpsOptions = null;
try {
  httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
  };
} catch (err) {
  console.warn('No se pudieron leer key.pem/cert.pem en ./certs. HTTPS no se iniciará hasta que existan.');
}

// Servidor HTTP
const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP server listening on http://localhost:${HTTP_PORT}`);
});

// Servidor HTTPS
if (httpsOptions) {
  const httpsServer = https.createServer(httpsOptions, app);
  httpsServer.listen(HTTPS_PORT, () => {
    console.log(`HTTPS server listening on https://localhost:${HTTPS_PORT}`);
  });
} else {
  console.log('HTTPS no iniciado: coloca key.pem y cert.pem en la carpeta ./certs y reinicia.');
}

module.exports = app;
