const express = require('express');
const searchController = require('../../contollers/search');
const router = express.Router();

router.get('/title', searchController.getSongsByTitle);
router.get('/singer', searchController.getSongsBySinger);

module.exports = router;