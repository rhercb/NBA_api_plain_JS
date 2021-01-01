import * as model from "../model";
import teamsView from "../views/teamsView";

const controlTeams = async function () {
  try {
    teamsView.renderSpinner();

    await model.loadTeams();

    teamsView.render(model.appData.teams);
  } catch (err) {
    teamsView.renderError();
  }
};

const controlTeamsPlayer = async function (teamKey) {
  try {
    await model.loadTeamsPlayers(teamKey);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  controlTeams();
  teamsView.addHandlerShowTeamPlayers(controlTeamsPlayer);
};
init();
