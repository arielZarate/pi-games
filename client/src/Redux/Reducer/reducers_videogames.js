/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import {
  GET_DETAIL_VIDEOGAME,
  GET_VIDEOGAMES,
  GET_GENRES,
  GET_PLATFORMS,
  POST_VIDEOGAME,
  GET_VIDEOGAME_NAME,
  FILTER_BY_GENRE,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
} from "../ActionsTypes/actions_types";

const initialState = {
  videogames: [],
  copyVideogames: [],
  genres: [],
  platforms: [],
  detail: {},
};

export default function rootReducerVideogames(state = initialState, action) {
  // en esta accion mando todos los videogames al arrglo vacio
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload, //esto es para q los filtros siempre empiecen sobre todos y no obre el filtro aplicado
      };

    case GET_DETAIL_VIDEOGAME:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_VIDEOGAME_NAME: //searchbar
      return {
        ...state,
        videogames: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
      };

    //======================================================================================

    case FILTER_CREATED:
      const filterCreated =
        action.payload === "Created"
          ? state.copyVideogames.filter((el) => el.createdInDb)
          : state.copyVideogames.filter((el) => !el.createdInDb);

      if (filterCreated.length === 0) {
        return {
          ...state, //me devuelve el estado anterior
          videogames: state.copyVideogames,
        };
      } else {
        return {
          ...state, //me devuelve el estado anterior
          videogames:
            action.payload === "All" ? state.copyVideogames : filterCreated,
        };
      }

    case ORDER_BY_NAME:
      const sortOrden =
        action.payload === "a-z"
          ? state.videogames.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              } else {
                return 0;
              }
            })
          : state.videogames.sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        videogames: sortOrden,
      };

    case ORDER_BY_RATING:
      let sortRating =
        action.payload === "Bajo"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortRating,
      };

    case FILTER_BY_GENRE:
      //const allGames = [];
      // eslint-disable-next-line no-const-assign
      let allGames = state.videogames; //aca tb para el filtro desde todos
      const genresFiltered =
        action.payload === "All"
          ? state.copyVideogames
          : allGames.filter((el) => {
              return el.genres.find((g) => {
                //console.log(g === action.payload);
                return g === action.payload;
              });
            });
      //valido que el array tenga algo , puede pasar que no exista ninguno
      if (genresFiltered.length > 0) {
        return {
          ...state,
          videogames: genresFiltered,
        };
      } else {
        console.log(genresFiltered);
        return {
          ...state,
          videogames: state.copyVideogames,
        };
      }

    //================================================================
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
        //allVideogames: action.payload, //esto es para q los filtros siempre empiecen sobre todos y no obre el filtro aplicado
      };

    //===============================================================

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };

    default:
      return state;
  }
}
