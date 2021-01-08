/**
 * Helper consists of multiple helper functions that are used across whole APP
 */

import { TIMEOUT_SEC } from "./config";

/**
 * Creates a timouet after x sec have gone by
 * @param {number} s max amout of secounds for request to process
 */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/**
 * AJAX function creates a async function that requests data from API URL
 * @param {string} url Url of API cann
 */
export const AJAX = async function (url) {
  try {
    const fetchPro = fetch(url);

    // Promise.race provides a race between API reuest, and timout request.
    // If API request doesnt end after timeout(x) secounds, the request will end and show error
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`(${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

/**
 * Converts weight into KG
 * @param {Number} weightInLbs Weight in LBS
 */
export const convertWeight = function (weightInLbs) {
  return `${weightInLbs}lb (${Math.ceil(weightInLbs / 2.2046)}kg)`;
};

/**
 * Converts height from inches to Feet and inches | Meters and cm
 * @param {Number} heightInInches Height in inches
 */
export const convertHeight = function (heightInInches) {
  const heightInFeetAndInches = parseFloat(heightInInches * 0.083333)
    .toFixed(1)
    .replace(".", "'");

  const heightInMeters = parseFloat(heightInInches / 39.37).toFixed(2);

  return `${heightInFeetAndInches}" (${heightInMeters}m)`;
};

/**
 * Converts date to US date
 * @param {String} date Date
 */
export const convertDate = function (date) {
  const oldDate = new Date(date);
  const newDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(oldDate);
  return newDate;
};

/**
 * Converts salary to USD with all commas
 * @param {Number} salary Sallary number
 */
export const convertSalary = function (salary) {
  const newSalary = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
  });

  return newSalary.format(salary);
};

/**
 * Function that converts position category short format to full name
 * @param {String} positionCategory Position category, example - G
 */
export const convertPlayerPositionCategory = function (positionCategory) {
  const categories = {
    G: "Guard",
    F: "Forward",
    C: "Center",
  };

  let position = "";
  const items = Object.keys(categories);
  items.map((key) => {
    if (key === positionCategory) {
      position = categories[positionCategory];
    }
  });

  return position;
};

/**
 * Function that converts player position short format to full name
 * @param {String} playerPosition Player position, example PG
 */
export const convertPlayerPosition = function (playerPosition) {
  const categories = {
    PG: "Point Guard",
    SG: "Shooting Guard",
    SF: "Small Forward",
    PF: "Power Forward",
    C: "Center",
  };

  let position = "";
  const items = Object.keys(categories);
  items.map((key) => {
    if (key === positionCategory) {
      position = categories[playerPosition];
    }
  });

  return position;
};

/**
 * Function that returns data about schedule.
 */
export const getCalendarData = function () {
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
  let thisYear = date.getFullYear();
  let thisMonth = date.getMonth();
  let thisDate = date.getDate();

  let [
    thisMontDays,
    thisMonthFirstDay,
    thisMonthLastDay,
    previousMnthDays,
    previousMonthFirstDay,
    nextMonthDays,
    nextMonthFirstDay,
  ] = getCalendarPreviousNext(thisYear, thisMonth);

  return {
    monthArray: months,
    daysArray: days,
    date: date,
    currentYear: thisYear,
    currentMonth: thisMonth,
    currentDate: thisDate,
    currentMonthDayCount: thisMontDays,
    currentMontFirstDay: thisMonthFirstDay,
    currentMonthLastDay: thisMonthLastDay,
    prevMonthDayCount: previousMnthDays,
    prevMonthFirstDay: previousMonthFirstDay,
    nextMonthDayCount: nextMonthDays,
    nextMonthFirstDay: nextMonthFirstDay,
  };
};

/**
 * Recieves current year and current month and return information about previous and next month
 * @param {Number} year This year
 * @param {Number} month This month
 */
const getCalendarPreviousNext = function (year, month) {
  let thisMontDays = new Date(year, month + 1, 0).getDate(); // Number or days in month month + 1 to get net month, and 0 gets back to previous
  let thisMonthFirstDay = new Date(year, month, 1).getDay(); // First day in month
  let thisMonthLastDay = new Date(year, month + 1, 0).getDay(); // Last day in month
  let previousMonthDays = new Date(year, month, 0).getDate(); // Number or days in last month
  let previousMonthFirstDay = new Date(year, month, 0).getDay(); //
  let nextMonthDays = new Date(year, month + 2, 0).getDate(); // Number of days in next month
  let nextMonthFirstDay = new Date(year, month + 1, 1).getDay();

  return [
    thisMontDays,
    thisMonthFirstDay,
    thisMonthLastDay,
    previousMonthDays,
    previousMonthFirstDay,
    nextMonthDays,
    nextMonthFirstDay,
  ];
};

/**
 * When a month in a calendar is changed, the function updates year, month and calendar layout
 * @param {Object} data Data about calendar
 * @param {HTML Element} step Html parent element of step arrows
 */
export const changeScheduleData = function (data, step) {
  // If nextmonth is pressed, then change month and year if needed, else decrease mont and year

  if (step.id === "scheduleNextMonth") {
    if (data.currentMonth === 11) {
      data.currentMonth = 1;
      data.currentYear = data.currentYear + 1;
    } else {
      data.currentMonth = data.currentMonth + 1;
    }
  } else {
    if (data.currentMonth === 0) {
      data.currentMonth = 11;
      data.currentYear = data.currentYear - 1;
    } else {
      data.currentMonth = data.currentMonth - 1;
    }
  }

  let [
    thisMontDays,
    thisMonthFirstDay,
    thisMonthLastDay,
    previousMnthDays,
    previousMonthFirstDay,
    nextMonthDays,
    nextMonthFirstDay,
  ] = getCalendarPreviousNext(data.currentYear, data.currentMonth);

  data.currentMonthDayCount = thisMontDays;
  data.currentMontFirstDay = thisMonthFirstDay;
  data.currentMonthLastDay = thisMonthLastDay;

  data.nextMonthDayCount = nextMonthDays;
  data.nextMonthFirstDay = nextMonthFirstDay;

  data.prevMonthDayCount = previousMnthDays;
  data.prevMonthFirstDay = previousMonthFirstDay;
};

export const getGameCountInDay = function (data) {
  const dates = [];

  data.map((el) => {
    const oldDate = new Date(el.Day);

    const newDate = `${oldDate.getFullYear()}-${
      oldDate.getMonth() + 1
    }-${oldDate.getDate()}`;

    dates.push(newDate);
  });

  const map = dates.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  return map;
};

export const getObjectValueFromKey = function () {};
