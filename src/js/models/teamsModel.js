import { API_URL, API_KEY, API_TEAMS_CALL_URL } from "../config";
import { AJAX } from "../helper";
import * as Model from "./Model";

export const teams = {
  teams: [],
};

export const loadTeams = async function () {
  try {
    const data = await AJAX(`${API_URL}${API_TEAMS_CALL_URL}?key=${API_KEY}`);
    teams.teams.push(data);
  } catch (error) {
    console.error(error);
  }
};
