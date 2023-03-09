const axios = require("axios");

const { Op } = require("sequelize");
const Videogames = require("../models/Videogames-model.js");
const Genres = require("../models/Genres-model");
/* 

⚠️ IMPORTANTE: se deben mostrar tanto los videojuegos traidos desde la API como así también los de la base de datos, 
pero NO está permitido almacenar en la base de datos los videojuegos de la API. 
Solamente se pueden guardar aquellos creados desde el form.

⚠️ IMPORTANTE: debido a que en la API existen alrededor de 500.000 videojuegos,
 por cuestiones de performance puedes tomar la simplificación de obtener 
 y paginar los primeros 100 videojuegos

*/

const { API_KEY, URL_BASE } = process.env;

const getGames = async (name) => {
  try {
    const url1 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=1`);
    const url2 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=2`);
    const url3 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=3`);
    const url4 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=4`);
    const url5 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=5`);
    /*     const url6 = await axios.get(`${URL_BASE}?key=${API_KEY}&page=6`);
     */
    //CONCATENAMOS LAS 7 URL

    const aux = url1.data.results.concat(
      url2.data.results,
      url3.data.results,
      url4.data.results,
      url5.data.results
      /*  url6.data.results */
    );
    const apiGames = aux.map((game) => {
      const platforms_aux = game.platforms.map((p) => p.platform);
      name = game.genres.map((g) => g.name);
      return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        platforms: platforms_aux.map((p1) => p1.name),
        rating: game.rating,
        released: game.released,
        //este es un atributo agregado
        genres: game.genres.map((g) => (name = g.name)),
      };
    });

    return apiGames;

    //return url1.data.results;
  } catch (error) {
    return { message: error.message };
  }
};

/* //=======datos de la db=========
const dataBase = async (name) => {
  
  if (!name) {
    return await Videogames.findAll();
  } else {
    const gameByName = await Videogames.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });

    return gameByName;
  }
}; */
//=======datos de la db=========
const dataBase = async () => {
  const gameByName = await Videogames.findAll({
    //==================
    /*   include: {
      model: Genres,
       attributes: ["name"],
        through: {
        attributes: [],
      }, 
    }, */
    //Nota: no mapee nada porque cuando traigo los datos en la getApi ya mapee todo por el atributo genres
    //========================
  });

  return gameByName;
};

const getAllGames = async () => {
  //unificamos todo de db y de api con el concat

  try {
    const apiData = await getGames(); // devuelvo todo la pi
    const dbInfo = await dataBase();
    const total = apiData.concat(dbInfo);
    return total;
  } catch (error) {
    return { message: error.message };
  }
};

//=============================================================================================

const getGamesById_Api = async (id) => {
  try {
    //https://api.rawg.io/api/games / 5000?   key=8428f4c04f784a6b82666578db2515b3

    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );

    const game = response.data;
    const objGame = {
      id: game.id,
      name: game.name,
      description: game.description_raw,
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms.map((p) => p.platform.name),
      genres: game.genres.map((g) => g.name),
    };

    //console.log(objGame);
    return objGame;
  } catch (error) {
    return { message: error.message };
  }
};

//==========================================================================================

//===========================================================================================

/* 
📍 GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía,
 deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo).
 Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.


*/
const getAllGenres = async () => {
  try {
    //    `https://api.rawg.io/api/genres?key=${API_KEY}`
    //https://api.rawg.io/api/genres?key=8428f4c04f784a6b82666578db2515b3
    const genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=8428f4c04f784a6b82666578db2515b3`
    );
    const nameGenres = genresApi.data.results;

    // console.log(nameGenres);
    nameGenres.map((g) => {
      //const allgames = g.games.map((e) => (game = [e.id, e.name, e.added]));
      Genres.findOrCreate({
        where: {
          //no le pongo el id asi lo guarda como viene de la api
          name: g.name,
          // image: g.image_background,
          //  games: allgames,
        },
      });
    });
    const allGenres = await Genres.findAll();
    return allGenres;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { getAllGames, getGamesById_Api, getAllGenres };
