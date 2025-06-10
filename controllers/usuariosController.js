import bcrypt from "bcrypt";
import usuariosModels from '../models/usuariosModels.js';

class usuariosController{
    constructor(){

    }
    async getAllUsuarios(req, res){
        try {
            const data = usuariosModels.getAllUsuarios();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
            console.log(e);
            
        }
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

            return res.statuys(200).json({msg: 'Usuario autenticado'});

        } catch (e) {
            res.status(500).send(e);
            console.log('Error al hacer login', e);
            
        }

    }
}

export default new usuariosController();