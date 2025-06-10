
import mongoose from 'mongoose';
import Usuario from '../schemas/usuariosSchema.js'

class usuariosModel {
    async createUsuario(usuario){
        return await Usuario.create(usuario)
    }
    async getAllUsuarios(){
        return await Usuario.find();
    }
    async getOneUsuario(filtro){
        return await Usuario.findOne(filtro);
    }

    async updateUsuario(id, usuario) {
        return await Usuario.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, usuario, {new: true })
    }

    async deleteUsuario(id){
        return await Usuario.findByIdAndDelete(id);
    }
}

export default new usuariosModel();