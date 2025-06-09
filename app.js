import 'dotenv/config';
import express from "express";
import routeMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/mascotas', routeMascotas)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Sevidor activo en el puerto " + PORT)) 

} catch (e) {
    console.log(e);  
}