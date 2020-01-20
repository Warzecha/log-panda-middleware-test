const express = require('express');
const {randomInRange} = require("../utils/numberUtils");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


  let delay = Math.round(randomInRange(40, 140));

  setTimeout(() => {
    res.send('respond with a resource');
  }, delay)
});

module.exports = router;
