import * as teamModel from "../models/teamsModel";
import View from "../views/View";
import teamsInfoView from "../views/Teams/teamsInfoView";
import teamsView from "../views/Teams/teamsView";

const spinner = new View();

const controlTeams = async function () {
  try {
    spinner.renderSpinner();

    await teamModel.loadTeams();

    spinner.removeSpinner();

    teamsView.render(teamModel.teamData.data);
  } catch (err) {
    teamsView.renderError();
  }
};

const controlTeamsPlayer = async function (teamKey) {
  try {
    spinner.renderSpinner();

    await teamModel.loadTeamsPlayers(teamKey);

    spinner.removeSpinner();

    teamsInfoView.render(teamModel.teamData.players);
  } catch (err) {
    console.error(err);
  }
};

export { controlTeams, controlTeamsPlayer };
