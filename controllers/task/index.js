const express = require('express');
const router = express.Router();

router.use('/task', require('./router'));

module.exports = router;
