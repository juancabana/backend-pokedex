// Middlewares for capture errors
export const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};

// Middleware for validate datatypes and schemas
export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json({success: false, payload: output.payload});
  }
  next(err);
};
