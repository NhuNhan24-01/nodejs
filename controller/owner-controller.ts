import { Request, Response } from "express";
import { Owner } from "../entity/owner";
class OwnerController {
  static createOwner = async function (req: Request, res: Response, next: any) {
    try {
      const newOwner = new Owner();
      const { name, address, age, phoneNumber, status } = req.body;
      newOwner.name = name;
      newOwner.address = address;
      newOwner.age = age;
      newOwner.phoneNumber = phoneNumber;
      newOwner.status = status;
      await newOwner.save();
      res.json(newOwner);
    } catch (error) {
      next(error);
    }
  };
  static editOwner = async function (req: Request, res: Response, next: any) {
    try {
      const editOwner = await Owner.findOneBy({
        id: Number(req.params.id),
      });
      const { name, address, age, phoneNumber, status } = req.body;
      if (name) {
        editOwner.name = name;
      }
      if (address) {
        editOwner.address = address;
      }
      if (age) {
        editOwner.age = age;
      }
      if (phoneNumber) {
        editOwner.phoneNumber = phoneNumber;
      }
      if (status) {
        editOwner.status = status;
      }
      await editOwner.save();
      res.json(editOwner);
    } catch (error) {
      next(error);
    }
  };
  static getInformationOwner = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getOwner = await Owner.findOneBy({
        id: Number(req.params.id),
      });
      res.json(getOwner);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationOwner = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getAllOwner = await Owner.find({
        relations: {
          pets: true,
        },
      });
      res.json(getAllOwner);
    } catch (error) {
      next(error);
    }
  };
  static deleteOwner = async function (req: Request, res: Response, next: any) {
    try {
      const deleteOwner = await Owner.findOneBy({
        id: Number(req.params.id),
      });
      await deleteOwner.remove();
      res.json(deleteOwner);
    } catch (error) {
      next(error);
    }
  };
}
export default OwnerController;
