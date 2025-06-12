
import mongoose from 'mongoose';
import Usuario from '../schemas/usuariosSchema.js'
import Mascota from '../schemas/mascotasSchema.js';

class usuariosModel {
    async createUsuario(usuario){
        return await Usuario.create(usuario)
    }


    async getOneById(id){
        return await Usuario.findById(id);
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

    async getMisMascotas(id){
        const filtro = {
            owner: id
        }
        const mascotas = await Mascota.find(filtro)

        return mascotas;
    }
}

export default new usuariosModel();