import { Request, Response } from "express";
export class PetMiddleware {
  static validatePet = async function (req: Request, res: Response, next: any) {
    try {
      if (!req.body.ownerId) {
        throw new Error(`ownerId là bắt buộc`);
      }
      if (!req.body.skincareId) {
        throw new Error(`skincareId là bắt buộc`);
      }
      if (!req.body.name) {
        throw new Error(`name là bắt buộc`);
      }
      if (!req.body.color) {
        throw new Error(`color là bắt buộc`);
      }
      if (!req.body.weight) {
        throw new Error(`weigt là bắt buộc`);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}
