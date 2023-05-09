const {Router} = require("express");
const {empleadosController} = require("../controllers/empleados");

const router = Router();

router.get("/",empleadosController.empleadosGet);
router.post("/",empleadosController.empleadosPost);
router.put("/",empleadosController.empleadosPut);
router.delete("/",empleadosController.empleadosDelete);

module.exports = router;