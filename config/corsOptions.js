const whitelist = require("./whiteList");
const corsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    console.log(whiteList);
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
