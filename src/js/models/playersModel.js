import { API_URL, API_KEY, API_PLAYER_DATA_URL } from "../config";
import { AJAX } from "../helper";

export const playerData = {
  data: {},
  stats: [],
};

const createPlayerInfoData = function (data) {
  return {
    id: data.PlayerID,
    team: data.Team,
    jersey: data.Jersey,
    positionCategory: data.PositionCategory,
    position: data.Position,
    name: data.FirstName,
    surname: data.LastName,
    height: data.Height,
    weight: data.Weight,
    birth: data.BirthDate,
    birthCity: data.BirthCity,
    college: data.College,
    salary: data.Sallary,
    photo: data.PhotoUrl,
    experience: data.Experience,
  };
};

export const loadPlayerInfoData = async function (playerID) {
  try {
    playerData.data = {};

    const data = await AJAX(
      `${API_URL}${API_PLAYER_DATA_URL}${playerID}?key=${API_KEY}`
    );

    playerData.data = createPlayerInfoData(data);
  } catch (err) {
    throw err;
  }
};
