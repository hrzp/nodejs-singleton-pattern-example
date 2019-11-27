class ResponseHandler {
  constructor() {
    this.isSuccessful = true;
    this.payload = null;
    this.message = "";
    this.errors = null;
    this.statusCode = 200;
  }

  setSuccessfulStatus(data, message, statusCode = 200) {
    this.isSuccessful = true;
    this.payload = data;
    this.message = message;
    this.statusCode = statusCode;
  }

  setFailureStatus(errors, message, statusCode = 200) {
    this.isSuccessful = false;
    this.payload = null;
    this.message = message;
    this.errors = errors;
    this.statusCode = statusCode;
  }
}

module.exports = ResponseHandler;
