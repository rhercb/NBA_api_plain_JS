import { API_URL, API_KEY, API_CURRENT_SEASON_URL } from "../config";
import { AJAX } from "../helper";

export const appInfo = {
  season: null,
};

export const getCurrentSeason = async function () {
  try {
    const data = await AJAX(
      `${API_URL}${API_CURRENT_SEASON_URL}?key=${API_KEY}`
    );
    appInfo.season = data.StartYear;
    console.log(appInfo.season);
  } catch (err) {}
};
