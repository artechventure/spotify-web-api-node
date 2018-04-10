'use strict';

function WebapiError(err, message, statusCode) {
  this.error = err;
  this.name = 'WebapiError';
  this.message = (message || '');
  this.statusCode = statusCode;
}

WebapiError.prototype = Error.prototype;

module.exports = WebapiError;