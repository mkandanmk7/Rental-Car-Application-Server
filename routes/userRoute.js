const service = require("../services/service");

const router = require('express').Router();



router.post("/register", service.registerUser);
router.post("/login", service.signInUser)

module.exports = router;