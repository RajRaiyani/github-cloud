/* eslint-disable newline-per-chained-call */
const Joi = require('joi');

const env = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.SERVER_PORT || 3007,
  serviceName: process.env.SERVICE_NAME || 'Green Code',
  consoleLogLevel: process.env.CONSOLE_LOG_LEVEL || 'info',
  fileLogLevel: process.env.FILE_LOG_LEVEL || 'block',
};

// Define validation for all the env vars
const envSchema = Joi.object({
  env: Joi.string().required().valid('dev', 'prod'),
  port: Joi.number().required().min(1024).max(65535),
  serviceName: Joi.string().required().min(3).max(255),
  consoleLogLevel: Joi.string().required().valid('block', 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'),
  fileLogLevel: Joi.string().required().valid('block', 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'),
});

// Validate env vars
const { error } = envSchema.validate(env);

// Throw an error if env vars are not valid
if (error) throw new Error(`ENV validation error: ${error.message}`);

// Export valid env vars
module.exports = {
  env: env.env,
  port: env.port,

  loggerOptions: {
    env: env.env,
    consoleLogLevel: env.consoleLogLevel,
    fileLogLevel: env.fileLogLevel,
    appName: env.serviceName,
  },
};
