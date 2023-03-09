const { DataTypes } = require("sequelize");
const sequelize = require("../Db/db");

const Genres = sequelize.define(
  "Genres",
  {
    /* id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    }, */

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    /*     image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    games: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }, */
  },

  {
    timestamps: false,
  }
);

module.exports = Genres;

/*  MODELO 2 | Genres

ID. *
Nombre. 

*/
