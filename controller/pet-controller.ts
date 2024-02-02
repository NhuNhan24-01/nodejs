import { Request, Response } from "express";
import { Pet } from "../entity/pet";
import { Owner } from "../entity/owner";
import { Skincare } from "../entity/skincare";
class PetController {
  static createPet = async function (req: Request, res: Response, next: any) {
    try {
      const newPet = new Pet();
      const { ownerId, skincareId, name, color, weight, status } = req.body;
      const owner = await Owner.findOneBy({
        id: ownerId,
      });
      if (!owner) throw new Error(`Can't find owner with ownerId`);
      const skincare = await Skincare.findOneBy({
        id: skincareId,
      });
      if (!skincare) throw new Error(`Can't find skincare with skincareId`);
      newPet.ownerId = ownerId;
      newPet.skincareId = skincareId;
      newPet.name = name;
      newPet.color = color;
      newPet.weight = weight;
      newPet.status = status;
      await newPet.save();
      res.json(newPet);
    } catch (error) {
      next(error);
    }
  };
  static editPet = async function (req: Request, res: Response, next: any) {
    try {
      const editPet = await Pet.findOneBy({
        id: Number(req.params.id),
      });
      const { ownerId, skincareId, name, color, weight, status } = req.body;
      if (ownerId) {
        editPet.ownerId = ownerId;
      }
      if (skincareId) {
        editPet.skincareId = skincareId;
      }
      if (name) {
        editPet.name = name;
      }
      if (color) {
        editPet.color = color;
      }
      if (weight) {
        editPet.weight = weight;
      }
      if (status) {
        editPet.status = status;
      }
      await editPet.save();
      res.json(editPet);
    } catch (error) {
      next(error);
    }
  };
  static getInformationPet = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getPet = await Pet.findOneBy({
        id: Number(req.params.id),
      });
      res.json(getPet);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationPet = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getAllPet = await Pet.find({
        relations: {
          owners: true,
          skincares: true,
        },
      });
      res.json(getAllPet);
    } catch (error) {
      next(error);
    }
  };
  static deletePet = async function (req: Request, res: Response, next: any) {
    try {
      const deletePet = await Pet.findOneBy({
        id: Number(req.params.id),
      });
      await deletePet.remove();
      res.json(deletePet);
    } catch (error) {
      next(error);
    }
  };
}
export default PetController;
