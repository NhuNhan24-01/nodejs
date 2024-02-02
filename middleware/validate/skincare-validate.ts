import { Request, Response } from "express";
export class SkincareMiddleware {
  static validateSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
