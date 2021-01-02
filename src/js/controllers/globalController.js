import * as globalModel from "../models/globalModel";

const controlSeason = async function () {
  try {
    await globalModel.getCurrentSeason();
  } catch (err) {
    console.error(err);
  }
};

export { controlSeason };
