const defaultErrorMessages = {
  400: "Bad Request / Invalid Inputs",
  401: "Unathorized / No valid authentication credentials",
  403: "Forbidden / Users do not have the required access",
  404: "Not Found",
  500: "Internal Server Error",
};

const errorHandler = (error, req, res, next) => {
  console.error("original error:", {
    name: error.name,
    message: error.message,
    stack: error.stack,
    statusCode: error.statusCode,
    details: error.details,
    code: error.code,
  });

  // set default error response
  const statusCode = error.statusCode || 500;
  // update error.message to follow the default message
  const errMessage = defaultErrorMessages[statusCode] || "Unexpected Error";
  // if there exists an error.message, to move the message to the details property
  const errDetails = error.details || error.message;

  const responsePayload = {
    statusCode: statusCode,
    success: false, 
    message: errMessage, 
    details: errDetails,
  };

  // include error.name if useful
  if (error.name && error.name !== "Error") responsePayload.name = error.name;

  // Only include stack in development
  if (process.env.NODE_ENV === "development") {
    responsePayload.stack = error.stack;
  }

  // send error response
  res.status(statusCode).json(responsePayload);
};

module.exports = errorHandler;