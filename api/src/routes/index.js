const { Router } = require("express");
const router = Router();

const videogame = require("./Videogame-routes");
const genre = require("./Genre-routes");

router.use("/videogames", videogame);
router.use("/genres", genre);

module.exports = router;
