const User = require("../model/User.js");

const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username And Password are required" });
  }
  // check for duplicate username in the db
  const duplicate = await User.findOne({ username: user }).exec();
  if (duplicate) {
    return res.sendStatus(409); // Conflict
  }
  try {
    // encrypt the pwd
    const hashedPassword = await bcrypt.hash(pwd, 10);
    // store the new user
    const result = await User.create({
      username: user,
      password: hashedPassword,
    });

    // const newUser = new User();
    // newUser.username = user..
    // const result = await newUser.save()

    console.log(result);

    res.status(201).json({ message: `New user ${user} is created` });
  } catch (err) {
    res.status(500).json({ message: err.message }); // server error
  }
};

module.exports = { handleNewUser };
