import View from "../View";

import * as helper from "../../helper";

class ScheduleView extends View {
  _parentElement = document.querySelector(".schedule-body");

  _scheduleHeader = document.querySelector(".schedule-head");
  _scheduleHeadYear = document.querySelector(".schedule__year");
  _scheduleHeadMonth = document.querySelector(".schedule__month");

  _errorMessage = "Sorry, but we could not get infomation about this team";

  addHandlerChangeDate(data, handler) {
    this._scheduleHeader.addEventListener("click", function (e) {
      const step = e.target.closest(".schedule__btn");
      if (!step) return;

      helper.changeScheduleData(data, step);

      this.querySelector(".schedule__month").innerHTML =
        data.monthArray[data.currentMonth];
      this.querySelector(".schedule__year").innerHTML = data.currentYear;

      handler();
    });
  }

  _generateMarkup() {
    this._clear();
    // If first day of month is Sunday, then replace 0 with 7
    let calendarMonthFirstDay =
      this._data.currentMontFirstDay === 0
        ? (calendarMonthFirstDay = 7)
        : (calendarMonthFirstDay = this._data.currentMontFirstDay);

    const calendarLength =
      this._data.currentMonthDayCount + calendarMonthFirstDay;
    let schedule = document.createElement("div");
    schedule.classList.add("schedule__wrapper");

    // Add month name and year to schedule head
    this._scheduleHeadMonth.innerHTML = `${
      this._data.monthArray[this._data.currentMonth]
    }`;
    this._scheduleHeadYear.innerHTML = `${this._data.currentYear}`;

    // Add days to schedule
    for (let i = 0; i < this._data.daysArray.length; i++) {
      schedule.innerHTML += `<div class="schedule__weekdays">${this._data.daysArray[i]}</div>`;
    }

    // Add date to schedule, but remove first empty dates from previous month
    for (let i = 1; i < calendarLength; i++) {
      if (i < calendarMonthFirstDay) {
        schedule.innerHTML += `<div></div>`;
      } else {
        schedule.innerHTML += `<div class="schedule__days">${
          i - calendarMonthFirstDay + 1
        }</div>`;
      }
    }

    return schedule.outerHTML; // return outterHTML because render method uses insertAdjacentHTML
  }
}

export default new ScheduleView();
