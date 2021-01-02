import {
  API_URL,
  API_KEY,
  API_PLAYER_DATA_URL,
  API_PLAYER_SEASON_STATS_URL,
} from "../config";
import { AJAX } from "../helper";
import * as globalModel from "./globalModel";

export const playerData = {
  data: {},
  stats: {},
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

const createPlayerSeasonStatsData = function (data) {
  return {
    statID: data.StatID,
    gamesPlayed: data.Games,
    minutes: data.Minutes,
    seconds: data.Seconds,
    fgMade: data.FieldGoalsMade,
    fgAttempted: data.FieldGoalsAttempted,
    fgPrecentage: data.FieldGoalsPrecentage,
    twoMade: data.TwoPointersMade,
    twoAttempted: data.TwoPointersAttempted,
    twoPrecentage: data.TwoPointersPercentage,
    threeMade: data.ThreePointersMade,
    threeAttempted: data.ThreePointersAttempted,
    threePrecentage: data.ThreePointersPercentage,
    freeMade: data.FreeThrowsMade,
    freeAttempted: data.FreeThrowsAttempted,
    freePrecentage: data.FreeThrowsPercentage,
    offRebounds: data.OffensiveRebounds,
    defRebounds: data.DefensiveRebounds,
    rebounds: data.Rebounds,
    assists: data.Assists,
    steals: data.Steals,
    blocks: data.BlockedShots,
    turnovers: data.Turnovers,
    fouls: data.PersonalFouls,
    points: data.Points,
    doubledouble: data.DoubleDoubles,
    tripledouble: data.TripleDoubles,
  };
};

export const loadPlayerSeasonStatsData = async function (playerID) {
  try {
    playerData.stats = {};

    const season = await globalModel.getCurrentSeason();

    const data = await AJAX(
      `${API_URL}${API_PLAYER_SEASON_STATS_URL}${season}/${playerID}?key=${API_KEY}`
    );

    playerData.stats = createPlayerSeasonStatsData(data);
  } catch (err) {
    throw err;
  }
};
