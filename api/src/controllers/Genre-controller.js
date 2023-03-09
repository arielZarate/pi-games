const { getAllGenres } = require("../services/getInfoApi");

/* 
📍 GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.


*/

const getGenres = async (req, res) => {
  try {
    const genres = await getAllGenres();
    res.json(genres);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getGenres };
