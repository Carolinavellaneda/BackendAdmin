const express = require("express");
const ConectarBD = require("./config/db");
const cors = require ("cors");

// creamos el servidor
const app = express();
//configuramos el puerto en una variable
const PORT = process.env.PORT || 5000;
//conectar la bd
ConectarBD();
//habilitar cors
app.use(cors());
//habilitar express json
app.use(express.json({extended : true}));

//Creamos las Rutas del proyecto
app.use ("/api/usuarios", require("./routes/usuarios"))
app.use ("/api/auth", require("./routes/auth"))
app.use ("/api/clientes", require("./routes/clientes"))
app.use ("/api/mascotas", require("./routes/mascotas"))
// CONFIGURACION DEL SERVIDOR

app.listen(PORT, () =>{
    console.log("el servidor esta conectado");

})