import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, _: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.json({ error: err.message });
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.userId && req.path != '/auth/login' && req.path != '/auth/register')
    return res.status(401).json({ });
  next();
};
