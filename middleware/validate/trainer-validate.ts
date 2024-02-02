import { Request, Response } from "express";
export class TrainerMiddleware {
  static validateTrainer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      if (!req.body.exp) {
        throw new Error(`exp là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
