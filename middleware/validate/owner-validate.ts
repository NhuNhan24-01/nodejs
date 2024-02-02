import { Request, Response } from "express";
export class OwnerMiddleware {
  static validateOwner = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      if (!req.body.address) {
        throw new Error(`address là bắt buộc`);
      }
      if (!req.body.phoneNumber) {
        throw new Error(`phoneNumber là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
