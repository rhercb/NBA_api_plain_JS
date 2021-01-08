import * as helper from "../helper";
import View from "../views/View";
import scheduleView from "../views/schedule/scheduleView";
import * as scheduleModel from "../models/scheduleModel";

const spinner = new View();
let calendarData = helper.getCalendarData();

// let getGameCountInDay = helper.getGameCountInDay()

const constrollSchedule = async function () {
  try {
    const calendarGameData = await scheduleModel.loadCalendarGameData();
    const gamesByDate = helper.getGameCountInDay(calendarGameData);

    const data = { ...calendarData, gamesByDate };
    scheduleView.render(data);
  } catch (err) {
    console.error(err);
  }
};

const controllChangeSchedule = async function () {
  const calendarGameData = await scheduleModel.loadCalendarGameData();
  const gamesByDate = helper.getGameCountInDay(calendarGameData);

  const data = { ...calendarData, gamesByDate };
  scheduleView.render(data);
};

const controllShowDateGames = function () {};

const init = function () {
  scheduleView.addHandlerChangeDate(calendarData, controllChangeSchedule);
};

export { constrollSchedule, init };
