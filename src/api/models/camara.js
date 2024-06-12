const mongoose = require("mongoose");

const camaraSchema = new mongoose.Schema({
    nombre:{ type: String, required: true },
    imagen:{ type: String, required: true },
    fotos: [{ type: mongoose.Types.ObjectId, ref: "fotos", required: false }]
},
{
    timestamps: true,
    collection: "Camara"
});

const Camara = mongoose.model("camaras", camaraSchema, "camaras");
module.exports = Camara;