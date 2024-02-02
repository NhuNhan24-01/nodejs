import { Request, Response } from "express";
export class ShoeMiddleware {
  static validateShoe = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      if (!req.body.size) {
        throw new Error(`size là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
