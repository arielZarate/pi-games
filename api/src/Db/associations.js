const Videogames = require("../models/Videogames-model.js");
const Genres = require("../models/Genres-model.js");

//ACA TENEMOS LAS ASOCIACIONES👌
Videogames.belongsToMany(Genres, {
  through: "genre_videogame",
  // foreignKey: "genresId",
});

Genres.belongsToMany(Videogames, {
  through: "genre_videogame",
});

//opcion2  by JorgeVega
/* const gameModel = require("../models/Videogames-model");

gameModel(sequelize); ==>> esto que le pasa por paramnetros es el sequelize del model

// el modelo esta asi

module.exposrts=(sequelize)=>{
  sequelize.define("User",{
    
  })
}

const {Videogames}=sequelize.models;


//despues hago las realciones


 */
