import bcrypt from "bcrypt";
import usuariosModels from '../models/usuariosModels.js';
import { generarToken } from "../helpers/auth.js";

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
            const {email, contraseña} = req.body;

            const usuarioExiste = await usuariosModels.getOneUsuario({email});
            if(!usuarioExiste){
                return res.status(400).json({ error: 'El usuario no existe'});
            }

            const validContraseña = await bcrypt.compare(contraseña, usuarioExiste.contraseña);

            if(!validContraseña){
                return res.status(404).json({error: "Contraseña no valida"});
            }

            const token = generarToken(email);

            return res.status(200).json({msg: 'Usuario autenticado', token});

        } catch (e) {
            res.status(500).send(e);
            console.log('Error al hacer login', e);
            
        }

    }
    async getProfile(req, res){
            try {
                const data = await usuariosModels.getOneUsuario({email: req.emailConectado});
                res.status(201).json(data);
            } catch (e) {
                res.status(500).send(e);
            }
    }


    async misMascotas(req,res){
        try {
            const { id } = req.params;

            const usuarioExiste = await usuariosModels.getOneById(id);
            if(!usuarioExiste){
                
                return res.status(400).json({ error: 'El usuario indicado no existe'});
            }
            
            const data = await usuariosModels.getMisMascotas(id);
            
            if(!data){
                return res.status(200).json({msg: 'No existen mascotas adoptadas actualmente'})
            }
            res.status(200).json(data);
            
        } catch (e) {
            res.status(500).json({ mensaje: e.message });
        }
    }
}

export default new usuariosController();