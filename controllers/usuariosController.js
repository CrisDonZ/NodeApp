import bcrypt from "bcrypt";
import usuariosModels from '../models/usuariosModels.js';

class usuariosController{
    constructor(){

    }

    async register(req, res){
        try {
            const {email, nombre, contraseña, telefono} = req.body;

            const usuarioExiste = await usuariosModels.getOneUsuario({email});

            if(usuarioExiste){
                return res.status(400).json({error: "El usuario ya existe"})
            }
            
            const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

            const data = await usuariosModels.createUsuario({
                email,
                nombre, 
                telefono,
                contraseña: contraseñaEncriptada
            });
            res.status(201).json(data);     
        } catch (e) {
            res.status(500).send(e);   
        }
    }

    async login(req, res){
        try {
            const data = await usuariosModels.getOneUsuario({

            })
        } catch (e) {
            res.status(500).send(e);
        }

    }
}

export default new usuariosController();