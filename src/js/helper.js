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
