const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getCamara, 
    getCamaraById, 
    postCamara, 
    putCamara, 
    deleteCamara  
} = require("../controllers/camara")

const camarasRouter = require("express").Router();

camarasRouter.get("/:id", getCamaraById);
camarasRouter.post("/", [isAdmin], upload.single("imagen"), postCamara);
camarasRouter.put("/:id", [isAdmin],upload.single("imagen"), putCamara);
camarasRouter.delete("/:id", [isAdmin], deleteCamara);
camarasRouter.get("/", getCamara);

module.exports = camarasRouter;