import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class mascotasModel {
    async createMascota(mascota){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.insertOne(mascota)
    }
    async getAllMascotas(){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.find({}).toArray();
    }

    async getOneMascota(id){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.findOne({ _id: new ObjectId(id)});
    }

    async updateMascota(id, mascota) {
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.updateOne({_id: new ObjectId(id)} , { $set:mascota});
    }

    async deleteMascota(id){
        const colMascotas = dbClient.db.collection('mascotas');
        return await colMascotas.deleteOne({_id: new ObjectId(id)});
    }
}

export default new mascotasModel;