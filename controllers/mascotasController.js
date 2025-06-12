import mascotasModel from '../models/mascotasModels.js'

class mascotasController {
    constructor(){

    }
    async createMascota(req, res){
        
        const {nombre, tipo, raza, edad, owner, adopted} = req.body;
        try {
            const data = await mascotasModel.createMascota(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async updateMascota(req, res){
        const {nombre, tipo, raza, edad, owner, adopted} = req.body;
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
            console.log(e);
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


    async adopt(req, res){
        try {
            const { mascotaId } = req.params;
            const { usuarioId } = req.body;

            if(!usuarioId){
                return res.status(400).json({msg: 'Se necesita id del usuario adoptante'});
            }

            const data = await mascotasModel.adopt(mascotaId, usuarioId);
            res.status(201).json({data});

        } catch (e) {
           res.status(500).json({mensaje: e.message }); 
        }
    }
}

export default new mascotasController();