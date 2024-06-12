const mongoose = require("mongoose");

const fotoSchema = new mongoose.Schema({
    nombre:{ type: String, required: true },
    imagen:{ type: String, required: true },
    categoria: { type:String,
    required: true, 
    enum: [
    "animales", 
    "coches", 
    "paisajes", 
    "aviones", 
    "trenes"
    ],},
    verified: { type: Boolean, required: true, default: false }
},
{
    timestamps: true,
    collection: "fotos"
});

const Foto = mongoose.model("fotos", fotoSchema, "fotos");
module.exports = Foto;