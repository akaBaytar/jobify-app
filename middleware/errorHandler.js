import { StatusCodes } from 'http-status-codes';

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'An error occurred.';

  if (err.name === 'CastError') {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ name: err.name, msg: 'An error occured.' });
  }

  res.status(statusCode).json({ name: err.name, msg: message });
};
