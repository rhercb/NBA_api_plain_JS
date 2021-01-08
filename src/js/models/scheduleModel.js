import { API_URL, API_KEY, API_SEASON_DATA_URL } from "../config";
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
