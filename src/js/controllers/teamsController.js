import * as model from "../model";
import teamsView from "../views/teamsView";

const controlTeams = async function () {
  await model.loadTeams();
  teamsView.render(model.appData.teams);
};

controlTeams();
