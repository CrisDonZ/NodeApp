import mascotasModel from '../models/mascotasModels.js'

class mascotasController {
    constructor(){

    }


    async createMascota(req, res){
        try {
            const data = await mascotasModel.createMascota(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async updateMascota(req, res){
        try {
            const {id} = req.params;
            const data = await mascotasModel.updateMascota(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async deleteMascota(req, res){
        try {
            const {id} = req.params;
            const data = await mascotasModel.deleteMascota(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAllMascotas(req, res){
        try {
            const data = await mascotasModel.getAllMascotas();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOneMascotas(req, res){
        try {
            const {id} = req.params;
            const data = await mascotasModel.getOneMascota(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new mascotasController();