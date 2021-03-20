const express = require('express');

const myListController = require('../controllers/mylist');
const songRouter = require('./song');
const router = express.Router();

router.get('/name', myListController.listName);
router.post('/add', myListController.add);
router.post('/remove', myListController.remove);
router.post('/info', myListController.inquiry);
router.use('/song', songRouter);

module.exports = router;