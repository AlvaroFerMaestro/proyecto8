const { isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getFotos, 
        getFotoById, 
        getFotoByCategory, 
        postFoto, 
        putFoto, 
        deleteFoto,  
        getFotosAdmin
    } = require("../controllers/fotos")

    const fotosRouter = require("express").Router();

    fotosRouter.get("/not-ferified", [isAdmin], getFotosAdmin)
    fotosRouter.get("/:id", getFotoById);
    fotosRouter.get("/categoria/:categoria", getFotoByCategory);
    fotosRouter.post("/",[isAuth], upload.single("imagen"), postFoto);
    fotosRouter.put("/:id", [isAdmin], upload.single("imagen"), putFoto);
    fotosRouter.delete("/:id", [isAdmin], deleteFoto);
    fotosRouter.get("/", getFotos);

module.exports = fotosRouter;