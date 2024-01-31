import { Trainer } from "../entity/trainer";
import { Request, Response } from "express";
class trainerController {
  static createTrainer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const newTrainer = new Trainer();
      const { name, exp, age, status } = req.body;
      newTrainer.name = name;
      newTrainer.exp = exp;
      newTrainer.age = age;
      newTrainer.status = status;
      await newTrainer.save();
      res.json(newTrainer);
    } catch (error) {
      next(error);
    }
  };
  static editTrainer = async function (req: Request, res: Response, next: any) {
    try {
      const editTrainer = await Trainer.findOneBy({
        id: Number(req.params.id),
      });
      const { name, exp, age, status } = req.body;
      if (name) {
        editTrainer.name = name;
      }
      if (exp) {
        editTrainer.exp = exp;
      }
      if (age) {
        editTrainer.age = age;
      }
      if (status) {
        editTrainer.status = status;
      }
      await editTrainer.save();
      res.json(editTrainer);
    } catch (error) {
      next(error);
    }
  };
  static getInformationTrainer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const get = await Trainer.findOneBy({
        id: Number(req.params.id),
      });
      res.json(get);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationTrainer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getall = await Trainer.find({});
      res.json(getall);
    } catch (error) {
      next(error);
    }
  };
  static deleteHlv = async function (req: Request, res: Response, next: any) {
    try {
      const deleteTrainer = await Trainer.findOneBy({
        id: Number(req.params.id),
      });
      await deleteTrainer.remove();
      res.json(deleteTrainer);
    } catch (error) {
      next(error);
    }
  };
}
export default trainerController;
