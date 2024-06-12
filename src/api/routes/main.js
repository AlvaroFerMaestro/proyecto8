const camarasRouter = require("./camara");
const fotosRouter = require("./fotos");
const usersRoutes = require("./users");

const mainRouter = require("express").Router()

mainRouter.use("/camaras", camarasRouter);
mainRouter.use("/fotos", fotosRouter);
mainRouter.use("/users", usersRoutes)

module.exports = mainRouter;