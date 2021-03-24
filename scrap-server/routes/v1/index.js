const express = require('express');
const searchRouter = require('./search');

const router = express.Router();

router.use('/search', searchRouter);

module.exports = router;