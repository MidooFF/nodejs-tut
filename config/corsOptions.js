const whitelist = require("./whitelist.js");
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    console.log(whitelist);
    console.log(whitelist.indexOf(origin));
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
