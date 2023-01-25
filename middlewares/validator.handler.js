import boom from "@hapi/boom";

// Middleware dinamic for status code
const validatorhandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

export default validatorhandler;