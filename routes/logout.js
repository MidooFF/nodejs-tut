const router = require("express").Router();
const { handleLogout } = require("../controllers/logoutController.js");

router.get("/", handleLogout);

module.exports = router;
