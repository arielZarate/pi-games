const server = require("../src/app.js");
const sequelize = require("../src/Db/db.js");

const { getAllGenres } = require("../src/services/getInfoApi");
const { PORT, DB_NAME, URL_BASE, API_KEY, URL_GENERS } = process.env;
//const { getApi } = require("../src/services/consumir_api.js");

//DECLARAMOS PUERTO EN .ENV

const generateServidor = async () => {
  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(
        `
       ================= Proyecto basado en la api de Videogames ==========================
       Link de la pagina oficial :https://rawg.io/apidocs
      
       Link para consumir la api VIDEOGAMES  ${URL_BASE}?key=${API_KEY}
       Link para consumir la api de VIDEOGAMES por generos  ${URL_GENERS}
        Connection has been established successfully on port ${PORT} in db del proyecto ${DB_NAME} 🍻🍻🍻🍻🍻🥂🥂🥂
        
        iniciar en http://localhost:${PORT}/videogames/  
        iniciar en http://localhost:${PORT}/genres/ 

        `
      );
    });

    /* CONFIGURACION DE LA BD EN FALSE PARA QUE LOS DATOS NO SE ELIMINEN AL REINICIAR  */
    sequelize.sync({ force: false });

    //llamo al metodo apenas se crea el server para que me cree los generes en la bd
    getAllGenres();
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();
