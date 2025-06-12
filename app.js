import 'dotenv/config';
import express from "express";
import routeMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import routeUsuarios from './routes/usuarios.js';

const app = express();

import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json' with {type: 'json'};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use('/mascotas', routeMascotas)
app.use('/usuarios', routeUsuarios)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Sevidor activo en el puerto " + PORT)) 

} catch (e) {
    console.log(e);  
}

process.on('SIGINT', async() => {
    dbClient.cerrarConexion();
    process.exit(0);
})