
import mongoose from 'mongoose';
import Mascota from '../schemas/mascotasSchema.js';
import Usuario from '../schemas/usuariosSchema.js';

class mascotasModel {
    async createMascota(mascota){
        return await Mascota.create(mascota);
    }
    async getAllMascotas(){
        return await Mascota.find();
    }

    async getOneMascota(id){
        return await Mascota.findById(id);
    }

    async updateMascota(id, mascota) {
        return await Mascota.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, mascota, {new: true })
    }

    async deleteMascota(id){
        return await Mascota.findByIdAndDelete(id);
    }

    async adopt(mascotaId, usuarioId){
        const mascota = await Mascota.findById(mascotaId);
        if(!mascota){
            throw new Error("Mascota no encontrada");
            
        }
        if(mascota.adopted){
            throw new Error("Mascota adoptada anteriormente");
            
        }

        const usuario = await Usuario.findById(usuarioId);

        if(!usuario){
            throw new Error('Usuario no encontrado, no puede adoptar');
            
        }

        const mascotaAdoptada = await Mascota.findByIdAndUpdate(mascotaId, {adopted: true, owner: usuarioId});

        if(!mascotaAdoptada){
            throw new Error('No hay mascota para adoptar');
            
        }

        return mascotaAdoptada;
    }
}

export default new mascotasModel();