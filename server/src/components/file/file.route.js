const express = require('express');
const controller = require('./file.controller');

const router = express.Router();

router.get('/', controller.list);

module.exports = router;



