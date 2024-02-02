import { Request, Response } from "express";
import { Skincare } from "../entity/skincare";
class SkincareController {
  static createSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    const newSkincare = new Skincare();
    const { name, status } = req.body;
    newSkincare.name = name;
    newSkincare.status = status;
    await newSkincare.save();
    res.json(newSkincare);
  };
  static editSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    const editSkincare = await Skincare.findOneBy({
      id: Number(req.params.id),
    });
    const { name, status } = req.body;
    if (name) {
      editSkincare.name = name;
    }
    if (status) {
      editSkincare.status = status;
    }
    await editSkincare.save();
    res.json(editSkincare);
  };
  static getInformationSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    const getSkincare = await Skincare.findOneBy({
      id: Number(req.params.id),
    });
    res.json(getSkincare);
  };
  static getAllInformationSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    const getAllSkincare = await Skincare.find({
      relations: {
        pets: true,
      },
    });
    res.json(getAllSkincare);
  };
  static deleteSkincare = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    const deleteSkincare = await Skincare.findOneBy({
      id: Number(req.params.id),
    });
    await deleteSkincare.remove();
    res.json(deleteSkincare);
  };
}
export default SkincareController;
