const { deleteFile } = require("../../utils/deleteFile");
const Foto = require("../models/fotos")



const getFotos = async (req, res, next) => {
    try {
        const fotos = await Foto.find({ verified: true });
        return res.status(200).json(fotos)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const getFotosAdmin = async (req, res, next) => {
    try {
        const fotos = await Foto.find({ verified: false });
        return res.status(200).json(fotos)
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const getFotoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const foto = await Foto.findById(id);
        return res.status(200).json(foto);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}


const getFotoByCategory = async (req, res, next) => {
    try {
        const { categoria } = req.params;
        const fotos = await Foto.find({ categoria })
        return res.status(200).json(fotos);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const postFoto = async (req, res, next) => {
    try {
        const newFoto = new Foto(req.body);

        if (req.file) {
            newFoto.imagen = req.file.path;

            // Para subir una foto a una carpeta especifica
           /*  const newFotoCarperta = await cloudinary.uploader.upload(req.file.path, {
            folder: "fotos" */
        }
        
        if (req.user.rol === "admin"){
            newFoto.verified = true;
        } else {
            newFoto.verified = false;
        }

        const fotoSaved = await newFoto.save();
        return res.status(201).json(fotoSaved);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}


const putFoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newFoto = new Foto(req.body);
        newFoto._id = id;
        /* const ActFotoCarpeta = await cloudinary.uploader.upload(req.file.path, {
                folder: "fotos" */

        if(req.file){
            newFoto.imagen = req.file.path;

            const oldFoto = await Foto.findById(id);
            deleteFile(oldFoto.imagen)

            /* const oldFotoCarpeta = await Foto.findById(id);
            if (oldFoto && oldFoto.imagen) {
                const id = oldFoto.imagen.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(`fotos/${id}`);
 */

        }

        const fotoUpdate = await Foto.findByIdAndUpdate(id, newFoto, {
            new: true,
        });
        return res.status(200).json(fotoUpdate);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

const deleteFoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fotoDeleted = await Foto.findByIdAndDelete(id);
        deleteFile(fotoDeleted.imagen)
        return res.status(200).json(fotoDeleted);
    } catch (error) {
        return res.status(400).json("Error en la solicitud")
    }
}

module.exports = {
    getFotos,
    getFotoById,
    getFotoByCategory,
    postFoto,
    putFoto,
    deleteFoto,
    getFotosAdmin,
}