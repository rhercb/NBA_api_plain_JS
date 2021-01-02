import * as model from "../model";

import View from "../views/View";
import playerInfoView from "../views/players/playerInfoView";

const spinner = new View();

const controlPlayer = async function (playerID) {
  try {
    spinner.renderSpinner();

    await model.loadPlayerInfoData(playerID);

    spinner.removeSpinner();

    playerInfoView.render(model.appData.player.data);
  } catch (err) {
    console.log(err);
  }
};

export { controlPlayer };
