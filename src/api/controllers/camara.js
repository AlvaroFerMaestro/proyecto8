const { deleteFile } = require("../../utils/deleteFile");
const Camara = require("../models/camara");


const getCamara = async (req, res, next) => {
    try {
        const camaras = await Camara.find().populate("fotos");
        return res.status(200).json(camaras)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const getCamaraById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const camara = await Camara.findById(id).populate("fotos");
        return res.status(200).json(camara);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}


const postCamara = async (req, res, next) => {
    try {
        const newCamara = new Camara(req.body);
        if(req.file){
            newCamara.imagen = req.file.path;
        }
        const camarasaved = await newCamara.save();
        return res.status(201).json(camarasaved);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}


const putCamara = async (req, res, next) => {
    try {
        const { id } = req.params;
        const oldCamara = await Camara.findById(id);
        const newCamara = new Camara(req.body);
        newCamara._id = id;
        const fotos = req.body.fotos || [];
        newCamara.fotos = [...oldCamara.fotos, ...fotos];
        

        if (req.file){
            newCamara.imagen = req.file.path;
            deleteFile(oldCamara.imagen);
        }

        const camaraUpdate = await Camara.findByIdAndUpdate(id, newCamara, {
            new: true,
        });
        return res.status(200).json(camaraUpdate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const deleteCamara = async (req, res, next) => {
    try {
        const { id } = req.params;
        const camaraDeleted = await Camara.findByIdAndDelete(id);
        deleteFile(camaraDeleted.imagen);
        return res.status(200).json(camaraDeleted);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

module.exports = {
    getCamara,
    getCamaraById,
    postCamara,
    putCamara,
    deleteCamara,
}