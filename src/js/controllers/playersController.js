import * as playerModel from "../models/playersModel";

import View from "../views/View";
import playerInfoView from "../views/players/playerInfoView";

const spinner = new View();

const controlPlayer = async function (playerID) {
  try {
    spinner.renderSpinner();

    await playerModel.loadPlayerInfoData(playerID);

    spinner.removeSpinner();

    playerInfoView.render(playerModel.playerData.data);
  } catch (err) {
    console.log(err);
  }
};

const controlPlayerSeasonStats = async function (playerID) {
  try {
    await playerModel.loadPlayerSeasonStatsData(playerID);
  } catch (err) {
    playerInfoView.renderError();
  }
};

export { controlPlayer, controlPlayerSeasonStats };
