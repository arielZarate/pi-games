import axios from "axios";
import {
  FILTER_BY_GENRE,
  FILTER_CREATED,
  GET_DETAIL_VIDEOGAME,
  GET_VIDEOGAMES,
  GET_VIDEOGAME_NAME,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  POST_VIDEOGAME,
} from "../ActionsTypes/actions_types";

//conexion entre front y back
export function getVideogames() {
  return function (dispatch) {
    axios
      .get("http://localhost:4000/videogames/")

      .then((r) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: r.data,
        });
      })

      .catch((error) => {
        console.error("Error fetching dogs: ", error);
      });

    // console.log(r.data);
  };
}

export function getVideogameName(name) {
  return async function (dispatch) {
    try {
      //http://localhost:4000/videogames?&name=god
      var response = await axios.get(
        `http://localhost:4000/videogames?name=${name}`
      );
      return dispatch({
        type: GET_VIDEOGAME_NAME,
        payload: response.data, //es lo q devuelve la ruta una vez q le asigno algo por name
      });
    } catch (error) {
      alert("Game not found 😕");
    }
  };
}

export function getDetails(id) {
  if (id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          `http://localhost:4000/videogames/${id}`
        );
        dispatch({
          type: GET_DETAIL_VIDEOGAME,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  /*  return {
    type: "RESET",
  }; */
}

export function postVideogame(body) {
  console.log(body.genres);
  return async function (dispatch) {
    await axios.post(`http://localhost:4000/videogames/`, body);
    //no hace falta pero por lo menos hago para que el estado avise que hace encada caso
    dispatch({
      type: POST_VIDEOGAME,
    });
  };
}

///============================filtrados==========================================

export function filterCreated(payload) {
  //db
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByName(payload) {
  // console.log(payload);
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
export function orderByRating(payload) {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
}

export function filterVideogamesByGenre(payload) {
  //el payload es el value del input
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
}
