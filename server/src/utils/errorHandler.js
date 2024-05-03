const expressValidation = require('express-validation');
const { errorCodes } = require('../config/constants');
const Logger = require('../lib/logger');

// TODO: improve error transformation
const convertValidationError = (err) => {
  const errors = [];
  Object.keys(err.details).forEach((location) => {
    err.details[location].forEach((e) => { errors.push({ location, messages: [e.message], field: e.path[0] }); });
  });
  return {
    httpStatusCode: err.statusCode,
    body: { code: 'validation_error', message: 'parameters are not valid', errors },
  };
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    const validationErrorObj = convertValidationError(err);
    Logger.error({ message: 'ValidationError', stack: JSON.stringify(validationErrorObj.body.errors) });
    return res.status(validationErrorObj.httpStatusCode).json(validationErrorObj.body);
  }

  if (err.name === 'MongoServerError' && err.code === 11000) {
    const duplicateKeyErrorObj = errorCodes.DUPLICATE_KEY_VALUE;
    return res.status(duplicateKeyErrorObj.httpStatusCode).json(duplicateKeyErrorObj.body);
  }

  if (err.message) {
    const errorObj = errorCodes[err.message];
    if (errorObj) return res.status(errorObj.httpStatusCode).json(errorObj.body);
  }

  // TODO : remove when improve logging
  console.log(err);
  Logger.error(err);

  return res.status(500).json({ message: 'internal server error' });
};

module.exports = errorHandler;
