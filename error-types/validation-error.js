// Your code here

class ValidationError extends Error {
  constructor(message = null , ...params) {
      // Pass remaining arguments to parent constructor
      super(...params);


      this.name = "ValidationError";

      // Maintains proper stack trace for where error was thrown (available on V8)
      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ValidationError);
      }

      // The name property should match the class's name
      //this.name = 'MissingRequiredFieldError';

      // Custom debugging information
      //this.fieldName = fieldName;

      this.message = message !== null ? message : "Invalid input";
      //this.message = message || "Invalid input";
      //this.date = new Date();
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
