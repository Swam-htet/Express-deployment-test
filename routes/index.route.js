const express = require("express");
const router = express.Router();
const indexRoute = require('../controllers/index.controller.js');

router.get("/",indexRoute.index);

module.exports = router;
