import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  statusCode?: number;
  details?: any;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  console.log(`Error: ${req.method} ${req.url} ->`, message);

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.details && { details: err.details }),
  });
};
