const express = require("express");
const { userDetails } = require("../controllers/userController");
const router = express.Router()

router.route("/user").post(userDetails);
module.exports = router