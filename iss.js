/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
// use request to fetch IP address from JSON API
let url = 'https://api.ipify.org?format=json';
const fetchMyIP = function(callback) {
  //go to the ipify API and request my url
  request(url, (error, response, body) => {
    if (error, null) {
      callback(error);
      return;
    } else if (response.statusCode !== 200) {
      let msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      let ip = JSON.parse(body).ip;
      callback(null, ip);
    }
  });
};

module.exports = { fetchMyIP };
