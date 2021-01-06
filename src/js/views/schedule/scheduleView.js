import View from "../View";

import * as helper from "../../helper";

class ScheduleView extends View {
  _parentElement = document.querySelector(".schedule-body");
  _scheduleHeadYear = document.querySelector(".schedule__year");
  _scheduleHeadMonth = document.querySelector(".schedule__month");
  _errorMessage = "Sorry, but we could not get infomation about this team";

  _generateMarkup() {}

  getCalendarDays() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth();
    const thisDate = date.getDate();
    const thisMontDays = new Date(thisYear, thisMonth + 1, 0).getDate(); // Number or days in month month + 1 to get net month, and 0 gets back to previous
    const thisMonthFirstDay = new Date(thisYear, thisMonth, 1).getDay(); // First day in month
    const thisMonthLastDay = new Date(thisYear, thisMonth + 1, 0).getDay(); // Last day in month
    //const previousMonthDays = new Date(thisYear, thisMonth, 0).getDate(); // Number or days in last month

    console.log(
      thisDate,
      months[thisMonth],
      thisYear,
      thisMontDays,
      thisMonthFirstDay,
      thisMonthLastDay
    );

    // If first day of month is Sunday, then replace 0 with 7
    let calendarMonthFirstDay =
      thisMonthFirstDay === 0
        ? (calendarMonthFirstDay = 7)
        : (calendarMonthFirstDay = thisMonthFirstDay);

    const calendarLength = thisMontDays + calendarMonthFirstDay;
    let schedule = document.createElement("div");
    schedule.classList.add("schedule__wrapper");

    // Add month name and year to schedule head
    this._scheduleHeadMonth.innerHTML = `${months[thisMonth]}`;
    this._scheduleHeadYear.innerHTML = `${thisYear}`;

    // Add days to schedule
    for (let i = 0; i < days.length; i++) {
      schedule.innerHTML += `<div class="schedule__weekdays">${days[i]}</div>`;
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
    console.log(schedule);
    this._parentElement.appendChild(schedule);
  }
}

export default new ScheduleView();
