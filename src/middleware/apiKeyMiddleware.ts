import { Request, Response, NextFunction } from 'express';


export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.headers['x-api-key'] as string | undefined;

  // If the API key is missing, respond with 401
  if (!apiKey) {
      res.status(401).json({ message: 'Unauthorized: API key is missing' });
      return; // Explicitly return to ensure no further execution
  }

  // If the API key is valid, proceed to the next middleware
  next();
};