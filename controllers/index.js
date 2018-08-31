const express = require('express');
const router = express.Router();

router.use('/api', require('./task'));

module.exports = router;
