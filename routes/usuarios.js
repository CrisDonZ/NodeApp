import express from 'express';
import usuariosController from '../controllers/usuariosController.js';

const route = express.Router();

route.post('/register', usuariosController.register);
route.post('/login', usuariosController.login);
route.get('/', usuariosController.getAllUsuarios);

export default route;