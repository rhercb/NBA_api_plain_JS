import * as teamModel from "../models/teamsModel";
import * as helper from "../helper";
import View from "../views/View";
import scheduleView from "../views/schedule/scheduleView";

const spinner = new View();
let calendarData = helper.getCalendarData();

const constrollSchedule = function () {
  scheduleView.render(calendarData);
};

const controllChangeSchedule = function () {
  scheduleView.render(calendarData);
};

const init = function () {
  scheduleView.addHandlerChangeDate(calendarData, controllChangeSchedule);
};

export { constrollSchedule, init };
