const {Router} = require("express");
const {usersController} = require("../controllers/users");

const router = Router();

router.get("/",usersController.usersGet);
router.post("/",usersController.usersPost);
router.put("/",usersController.usersPut);
router.delete("/",usersController.usersDelete);

module.exports = router;