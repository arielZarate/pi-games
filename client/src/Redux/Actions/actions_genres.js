import axios from "axios";
import { GET_GENRES } from "../ActionsTypes/actions_types";
//get generos
export function getGenres() {
  return async function (dispatch) {
    var json = await axios.get("genres/"); //ver si le pongo ,{}
    return dispatch({
      type: GET_GENRES,
      payload: json.data,
    });
  };
}
