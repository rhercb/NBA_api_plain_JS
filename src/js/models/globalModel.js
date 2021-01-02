import { API_URL, API_KEY, API_CURRENT_SEASON_URL } from "../config";
import { AJAX } from "../helper";

export const getCurrentSeason = async function () {
  try {
    const data = await AJAX(
      `${API_URL}${API_CURRENT_SEASON_URL}?key=${API_KEY}`
    );
    return data.StartYear;
  } catch (err) {
    throw err;
  }
};
