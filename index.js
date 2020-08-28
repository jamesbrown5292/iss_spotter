const { fetchMyIP } = require('./iss');

  fetchMyIP((err, ip) => {
    if (err) {
      console.log("Houston, we have a problem", err);
      return;
    }
    console.log("It worked and returned IP: ", ip);
  });