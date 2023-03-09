const express = require("express");
const router = express.Router();
const {
  getVideogames,
  videogameById,
  createVideogames,
  updateVideogames,
  deleteVideogames,
} = require("../controllers/Videogame-controller");

const middleware = require("../middlewares/videogame-middleware");

router.get("/:id", videogameById); //trae por id
router.get("/:name", getVideogames); //trae por query o sea el name
router.get("/", getVideogames); //trae todos
router.post("/", middleware.validateCreate, createVideogames); //crea un videogame

//agregados
router.put("/:id", updateVideogames); //actualiza un videogame
router.delete("/:id", deleteVideogames); //elimina un videogame

module.exports = router;
