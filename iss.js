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

const fetchMyIP = function(callback) {
  //go to the ipify API and request my url
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error, null) {
      callback(error);
      return;
    } else if (response.statusCode !== 200) {
      let msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request('https://ipvigilante.com/75.154.249.42', (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = 'http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON';
  const LAT = coords.latitude;
  const LON = coords.longitude;
  request(`http://api.open-notify.org/iss-pass.json?lat=${LAT}&lon=${LON}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    }
    console.log(body);
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
