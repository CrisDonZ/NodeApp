import express from 'express';
import usuariosController from '../controllers/usuariosController.js';
import { verificarToken } from '../helpers/auth.js';

const route = express.Router();

route.post('/register', usuariosController.register);
route.post('/login', usuariosController.login);
route.get('/profile', verificarToken,  usuariosController.getProfile);
route.get('/:id/misMascotas', verificarToken, usuariosController.misMascotas);

export default route;