const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const ip = '75.154.249.4762';
const coords = { latitude: '50', longitude: '-122.95440' };
fetchMyIP((err, ip) => {
  if (err) {
    console.log("Houston, we have a problem", err);
    return;
  }
  console.log("It worked and returned IP: ", ip);
  return ip;
});

fetchCoordsByIP(ip, (err, data)  => {
  if (err) {
    console.log(err, data);
    return;
  }
  console.log(data);
});

fetchISSFlyOverTimes(coords, (err, data) => {
  if (err) {
    console.log(err, data);
    return;
  }
  console.log(data)
})