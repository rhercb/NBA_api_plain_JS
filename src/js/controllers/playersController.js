import * as model from "../model";
import playersView from "../views/playersView";

const controlTeamsPlayer = async function (teamKey) {
  try {
    await model.loadTeamsPlayers(teamKey);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  playersView.addHandlerShowTeamPlayers(controlTeamsPlayer);
};

export default new init();
