import Router from "./Router";

import {
  controlTeams as teamsControlTeams,
  controlTeamsPlayer as teamsControlTeamsPlayer,
} from "../controllers/teamsController";

const router = new Router({
  mode: "hash",
  root: "/",
});

router
  .add(/teams\/(.*)/, (key) => {
    teamsControlTeamsPlayer(key);
  })
  .add("", () => {
    teamsControlTeams();
  });
