const errorCodes = require('./errorCodes');
const path = require('path');

module.exports = {
  errorCodes,
  path:{
    storage : path.join(__dirname, '../../../storage')
  }
};
