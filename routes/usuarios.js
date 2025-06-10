import express from 'express';
import usuariosController from '../controllers/usuariosController.js';

const route = express.Router();

route.post('/register', usuariosController.register)

export default route;