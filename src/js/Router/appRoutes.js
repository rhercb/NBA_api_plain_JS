import Router from "./Router";

import View from "../views/View";

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

const view = new View();

router
  .add(/teams\/(.*)/, (key) => {
    view.renderBodyElements("team-info");

    teamsControlTeamsPlayer(key);
  })
  .add(/teams/, () => {
    view.renderBodyElements("teams-list");

    teamsControlTeams();
  })
  .add(/players\/(.*)/, (playerID) => {
    view.renderBodyElements("player-info");

    controlPlayer(playerID);
    controlPlayerSeasonStats(playerID);
  });
