// Configuration
const path = require('path');
require('dotenv').config({path:path.join(__dirname,'../../.env'),override: true});

// Other imports
const http = require('http');
const vars = require('./config/vars');
const Logger = require('./lib/logger');

const app = require('./app');

const server = http.createServer(app);

const { port, env } = vars;

Logger.info(`ENV : ${env}`);

server.listen(port, () => {
  Logger.info(`Server PORT : ${port}`);
});

module.exports = app;