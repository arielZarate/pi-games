const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Videogames = sequelize.define(
  "Videogames",
  {
    id: {
      type: DataTypes.UUID, //tipo i de id que se genera en el momento con numeros y letras
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    //plataforma es un array que sacaremos id name slug y image_background
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    //fecha de lanzamiento
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //quiero validar que sea del 1 al 5 asi lo puedo tipificar al juego
      validate: {
        /*   isNumeric: true, */
        max: 5,
        min: 1,
      },
    },
    //voy a traer los generos de la api por name
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },

  {
    timestamps: false,
  }
);

module.exports = Videogames;
/* 

MODELO 1 | Videogames

ID (deben ser distintos a los que vienen de la API). *
Nombre. *
Descripción. *
Plataformas. *
Imagen. *
Fecha de lanzamiento. *
Rating. *







*/
