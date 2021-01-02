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
