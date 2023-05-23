const { Sequelize } = require("sequelize");
const database = require("../Db/config");
require("../Db/associations");

const sequelize = new Sequelize(
  `postgres://${database.user}:${database.password}@${database.localhost}/${database.name_schema}`,
  {
    //  host: 'localhost',
    dialect:
      "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    logging: false,
    native: false,
    /*  define: {
      timestamps: false,
    }, */
  }
);

//========================================================================================

// opcion 1: LAS ASOCIACIONES VIENEN DEL ARCHIVO IMPORTADO

module.exports = sequelize;
