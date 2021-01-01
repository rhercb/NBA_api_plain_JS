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

const init = function () {
  controlTeams();
};

export default new init();
