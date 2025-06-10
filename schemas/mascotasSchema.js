import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
    {
        nombre: {
            required: true, 
            type: String
        },
        tipo: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true,
            min: [0,'La edad no puede ser negativa'],
        },
        raza: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            default: "NA"
        }
    }, {timestamps:true}
);

export default mongoose.model('mascotas', mascotaSchema);