const express = require('express');

const songController = require('../controllers/song');
const router = express.Router();

router.post('/add', songController.add);
router.post('/remove', songController.remove);

module.exports = router;