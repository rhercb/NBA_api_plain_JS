import { API_URL, API_KEY, API_TEAMS_CALL_URL } from "./config";
import { AJAX } from "./helper";

export const appData = {
  teams: [],
};

/**
 * This function creates instances about every team
 * @param {Array} data Data from API about teams that will be retrieved from API CALL
 */
const createTeamData = function (data) {
  return {
    teamID: data.TeamID, // Team ID in API
    city: data.City, // Team city name
    name: data.Name, // Teams name
    key: data.Key, // Team shorthand name, example - WAS
    conference: data.Conference, // Teams conference (East or West)
    logo: data.WikipediaLogoUrl, // Teams logo
    primaryColor: data.PrimaryColor,
    secondaryColor: data.SecondaryColor,
    stadium: data.StadiumID,
    globalID: data.GlobalTeamID, // Global API ID
  };
};

/**
 * Function that gets Data from API call about teams and puts it inside AppData.teams
 */
export const loadTeams = async function () {
  try {
    const data = await AJAX(`${API_URL}${API_TEAMS_CALL_URL}?key=${API_KEY}`);
    data.forEach((element) => {
      appData.teams.push(createTeamData(element));
    });
  } catch (error) {
    console.error(error);
  }
};