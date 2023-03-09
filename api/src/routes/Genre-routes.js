const express = require("express");
const router = express.Router();
const { getGenres } = require("../controllers/Genre-controller");

router.get("/", getGenres);

/*
router.post('/', (req, res, next) => {
    const {name} = req.body
    return Genre.create({name})
    .then((newGenreNew) => {
    res.status(201).send(newGenreNew) //201 mensaje creado con exito, es opcional
  })
   .catch(error => next(error))
})
*/

module.exports = router;
