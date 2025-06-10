import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        email: {
            required: true,
            type: String,
            unique: true,
            trim: true
        },

        nombre: {
            required: true,
            trim:true,
            type: String
        },
        
        contraseña: {
            required: true,
            type: String,
        },

        telefono: {
            required: false,
            type: String
        }


    }
)

export default mongoose.model('usuarios', usuarioSchema);