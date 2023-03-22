import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { name, message } = error;
    switch (name) {
      case 'NOT_FOUND':
        return res.status(404).json({ message });
      default:
        return res.status(500).json({ message });
    }
    next();
  }
}

export default ErrorHandler;