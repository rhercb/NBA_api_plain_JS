import {
  API_URL,
  API_KEY,
  API_SEASON_DATA_URL,
  API_SINGLE_DAY_GAMES_URL,
} from "../config";
import { AJAX } from "../helper";
import { getCurrentSeason } from "../models/globalModel";

export const loadCalendarGameData = async function () {
  try {
    const season = await getCurrentSeason();
    const [, , seasonName] = season;

    const data = await AJAX(
      `${API_URL}${API_SEASON_DATA_URL}${seasonName}?key=${API_KEY}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const loadGamesForDay = async function (date) {
  try {
    const data = await AJAX(
      `${API_URL}${API_SINGLE_DAY_GAMES_URL}${date}?key=${API_KEY}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
