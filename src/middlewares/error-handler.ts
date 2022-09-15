/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import AppError from '@/utils/responses/error';

export const errorHandler = (
  err: AppError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError)
    return res.status(err.Status.code).json(err.JSON);

  const newErr = new AppError(
    'InternalServerError',
    err.message ?? 'Something went wrong.',
  );

  return res.status(newErr.Status.code).json(newErr.JSON);
};

export default errorHandler;
