import { NextFunction, Request, Response } from "express";

export default function authAPIkey(req: Request, res: Response, next: NextFunction) {
  const apiKey = process.env.API_KEY;

  const requestApiKey = req.headers["authorization"]?.split(" ")[1]
    ;

  if (!requestApiKey || requestApiKey !== apiKey) {
    res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
