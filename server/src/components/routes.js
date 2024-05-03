const express = require('express');
const fileRoutes = require('./file/file.route');


const router = express.Router();

router.use('/files', fileRoutes);

module.exports = router;




