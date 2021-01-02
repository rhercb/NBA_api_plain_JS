import {
  API_URL,
  API_KEY,
  API_TEAMS_CALL_URL,
  API_TEAMS_PLAYERS_CALL_URL,
} from "../config";
import { AJAX } from "../helper";

export const teamData = {
  data: [],
  players: [],
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
      teamData.data.push(createTeamData(element));
    });
  } catch (error) {
    throw err;
  }
};

const createTeamPlayerData = function (data) {
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

export const loadTeamsPlayers = async function (teamKey) {
  try {
    teamData.players = [];
    const data = await AJAX(
      `${API_URL}${API_TEAMS_PLAYERS_CALL_URL}${teamKey}?key=${API_KEY}`
    );
    data.forEach((element) => {
      teamData.players.push(createTeamPlayerData(element));
    });
  } catch (err) {
    throw err;
  }
};
