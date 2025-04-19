import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abordEarly: false });
    next();
  } catch (error) {
    const validationError = createHttpError(400, 'Bad request', {
      error: error.details,
    });
    next(validationError);
  }
};
