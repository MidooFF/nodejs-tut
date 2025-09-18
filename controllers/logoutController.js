const User = require("../model/User.js");

const handleLogout = async (req, res) => {
  // On client, also delete he access token

  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.status(401); // no content
  }
  const refreshToken = cookies.jwt;

  // is refresh token in the db?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(403);
  }

  // delete the refresh token from the db
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
};

module.exports = { handleLogout };
