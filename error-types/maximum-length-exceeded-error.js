const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError{
  constructor(val = null , ...params) {
      // Pass remaining arguments to parent constructor
      super(...params);


      this.name = "MaximumLengthExceededError";

      // Maintains proper stack trace for where error was thrown (available on V8)
      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, MaximumLengthExceededError  );
      }

      // The name property should match the class's name
      //this.name = 'MissingRequiredFieldError';

      // Custom debugging information
      //this.fieldName = fieldName;

      if(val === null) this.message =  "Maximum length exceeded";
      else this.message = "Maximum length exceeded by " + val;
      //this.message = message || "Invalid input";
      //this.date = new Date();
  }
}

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
