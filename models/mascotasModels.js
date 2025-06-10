
import mongoose from 'mongoose';
import Mascota from '../schemas/mascotasSchema.js'

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
}

export default new mascotasModel();