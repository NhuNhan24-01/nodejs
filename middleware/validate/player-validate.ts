import { Request, Response } from "express";
export class PlayerMiddleware {
  static validatePlayer = async (req: Request, res: Response, next: any) => {
    try {
      if (!req.body.shoeId) {
        throw new Error("shoeId là bắt buộc");
      }
      if (!req.body.clubId) {
        throw new Error("clubId là bắt buộc");
      }
      if (!req.body.name) {
        throw new Error("name là bắt buộc");
      }
      if (!req.body.num) {
        throw new Error("num là bắt buộc");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
