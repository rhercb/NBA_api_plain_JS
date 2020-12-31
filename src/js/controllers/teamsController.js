import * as teamsModel from "../models/teamsModel";

const controlTeams = async function () {
  await teamsModel.loadTeams();
};

controlTeams();
