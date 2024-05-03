const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Logger = require('./lib/logger');
const errorHandler = require('./utils/errorHandler');
const routes = require('./components/routes');

const app = express();


app.use(morgan(':method :url Status : :status, Time taken: :response-time ms', {
  stream: {
    write: (message) => Logger.info(message),
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/ui');
});

app.use('/ui',express.static(path.join(__dirname, '../../client/dist')));

app.use('/api', routes);


app.use(errorHandler);

module.exports = app;