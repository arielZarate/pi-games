import { GET_PLATFORMS } from "../ActionsTypes/actions_types";
export function getPlatforms() {
  return async function (dispatch) {
    //PARTA CREAR VOY A PONER UN ARRAY DE PLATFORMS HARDCKODEADAS
    const info = [
      "Android",
      "iOS",
      "Linux",
      "macOS",
      "Nintendo Switch",
      "PC",
      "PlayStation 1",
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation 5",
      "PS Vita",
      "Web",
      "Wii U",
      "Xbox 360",
      "Xbox One",
      "Xbox Series S/X",
    ];
    dispatch({
      type: GET_PLATFORMS,
      payload: info,
    });
  };
}
