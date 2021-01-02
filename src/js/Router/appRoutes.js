import Router from "./Router";

import {
  controlTeams as teamsControlTeams,
  controlTeamsPlayer as teamsControlTeamsPlayer,
} from "../controllers/teamsController";

import {
  controlPlayer,
  controlPlayerSeasonStats,
} from "../controllers/playersController";

const router = new Router({
  mode: "hash",
  root: "/",
});

router
  .add(/teams\/(.*)/, (key) => {
    teamsControlTeamsPlayer(key);
  })
  .add(/teams/, () => {
    teamsControlTeams();
  })
  .add(/players\/(.*)/, (playerID) => {
    controlPlayer(playerID);
    controlPlayerSeasonStats(playerID);
  });
