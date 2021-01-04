import * as teamModel from "../models/teamsModel";
import View from "../views/View";
import teamsInfoView from "../views/Teams/teamsInfoView";
import teamsView from "../views/Teams/teamsView";
import teamsSortingView from "../views/Teams/teamsSortingView";

const spinner = new View();

const controlTeams = async function () {
  try {
    spinner.renderSpinner();

    await teamModel.loadTeams();

    spinner.removeSpinner();

    teamsView.render(teamModel.teamData.data);

    teamsSortingView.addSortingHandler(controlSortTeams);
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

const controlSortTeams = function (conference) {
  teamModel.teamData.sort = conference;
  teamModel.teamData.data.map((el) => {
    if (el.conference !== conference) {
      teamsView.hideElement(el.key);
    } else {
      teamsView.showElement(el.key);
    }

    if (teamModel.teamData.sort === "") {
      teamsView.showElement(el.key);
    }
  });
};

const init = function () {
  // teamsSortingView.addSortingHandler(controlSortTeams());
};

export { controlTeams, controlTeamsPlayer, init };
