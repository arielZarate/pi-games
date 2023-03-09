import { GET_GENRES } from "../ActionsTypes/actions_types";

const initialState = {
  genres: [],
};
function genresReducer(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
        //allVideogames: action.payload, //esto es para q los filtros siempre empiecen sobre todos y no obre el filtro aplicado
      };
    default:
      return state;
  }
}
