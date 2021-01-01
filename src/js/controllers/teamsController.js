import * as model from "../model";
import teamsView from "../views/teamsView";

const controlTeams = async function () {
  await model.loadTeams();
  teamsView.render(model.appData.teams);
};

const controlTeamsPlayer = async function (teamKey) {
  await model.loadTeamsPlayers(teamKey);
};

const init = function () {
  controlTeams();
  teamsView.addHandlerShowTeamPlayers(controlTeamsPlayer);
};
init();
