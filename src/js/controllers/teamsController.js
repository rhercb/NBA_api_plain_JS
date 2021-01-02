import * as model from "../model";
import View from "../views/View";
import teamsInfoView from "../views/Teams/teamsInfoView";
import teamsView from "../views/Teams/teamsView";

const spinner = new View();

const controlTeams = async function () {
  try {
    spinner.renderSpinner();

    await model.loadTeams();

    spinner.removeSpinner();

    teamsView.render(model.appData.teams.data);
  } catch (err) {
    teamsView.renderError();
  }
};

const controlTeamsPlayer = async function (teamKey) {
  try {
    spinner.renderSpinner();

    await model.loadTeamsPlayers(teamKey);

    spinner.removeSpinner();

    teamsInfoView.render(model.appData.teams.players);
  } catch (err) {
    console.error(err);
  }
};

export { controlTeams, controlTeamsPlayer };
