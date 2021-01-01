import * as model from "../model";
import teamsInfoView from "../views/teamsInfoView";
import teamsView from "../views/teamsView";

const controlTeams = async function () {
  try {
    teamsView.renderSpinner();

    await model.loadTeams();

    teamsView.render(model.appData.teams.data);
  } catch (err) {
    teamsView.renderError();
  }
};

const controlTeamsPlayer = async function (teamKey) {
  try {
    teamsInfoView.renderSpinner();

    await model.loadTeamsPlayers(teamKey);

    teamsInfoView.render(model.appData.teams.players);
  } catch (err) {
    console.error(err);
  }
};

export { controlTeams, controlTeamsPlayer };
