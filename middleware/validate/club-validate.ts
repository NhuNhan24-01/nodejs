import { Request, Response } from "express";
export class ClubMiddleware {
  static validateClub = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      if (!req.body.num) {
        throw new Error(`num là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
