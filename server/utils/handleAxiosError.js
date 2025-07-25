const handleAxiosError = (err, next, fallbackMessage = "External API Error") => {
  if (err.response && err.response.data) {
    const apiError = new Error(err.response.data.details || fallbackMessage);
    apiError.statusCode = err.response.status;
    apiError.details = err.response.data.details;
    apiError.code = err.response.data.code;
    apiError.type = err.response.data.type;
    return next(apiError);
  }

  return next(err);
};

module.exports = handleAxiosError;