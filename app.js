const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

require("dotenv").config(); // leer variables de entorno

// Middlewares globales
app.use(express.json());
app.use(cookieParser()); // <-- NECESARIO para leer cookies

// Ruta principal
const homeRoutes = require("./routes/homeRoutes");
app.use("/", homeRoutes);

// Rutas de autenticación
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Rutas protegidas de viajes
const viajesRoutes = require("./routes/viajesRoutes");
app.use("/api/viajes", viajesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
