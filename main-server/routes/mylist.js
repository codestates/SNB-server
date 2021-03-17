const express = require('express');

const myListController = require('../controllers/mylist');
const router = express.Router();

router.post('/add', myListController.add);
router.post('/remove', myListController.remove);
router.get('/info:id', myListController.inquiry);
