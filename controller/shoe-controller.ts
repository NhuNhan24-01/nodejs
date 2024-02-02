import { Request, Response } from "express";
import { Shoe } from "../entity/shoe";
class ShoeController {
  static createShoe = async function (req: Request, res: Response, next: any) {
    try {
      const newShoe = new Shoe();
      const { name, size, price, status } = req.body;
      newShoe.name = name;
      newShoe.size = size;
      newShoe.price = price;
      newShoe.status = status;
      await newShoe.save();
      console.log(Shoe);
      res.json(newShoe);
    } catch (error) {
      next(error);
    }
  };
  static editShoe = async function (req: Request, res: Response, next: any) {
    try {
      const edit = await Shoe.findOneBy({
        id: Number(req.params.id),
      });
      const { name, size, price, status } = req.body;
      if (name) {
        edit.name = name;
      }
      if (size) {
        edit.size = size;
      }
      if (price) {
        edit.price = price;
      }
      if (status) {
        edit.status;
      }
      await edit.save();
      res.json(edit);
    } catch (error) {
      next(error);
    }
  };
  static getInformationShoe = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const get = await Shoe.findOneBy({
        id: Number(req.params.id),
      });
      res.json(get);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationShoe = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getall = await Shoe.find({
        relations: {
          players: true,
        },
      });
      res.json(getall);
    } catch (error) {
      next(error);
    }
  };
  static deleteShoe = async function (req: Request, res: Response, next: any) {
    try {
      const deleteShoe = await Shoe.findOneBy({
        id: Number(req.params.id),
      });
      await deleteShoe.remove();
      res.json(deleteShoe);
    } catch (error) {
      next(error);
    }
  };
}
export default ShoeController;
