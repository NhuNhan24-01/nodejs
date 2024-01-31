import { Request, Response } from "express";
import { Club } from "../entity/club";
class ClubController {
  static createClub = async function (req: Request, res: Response, next: any) {
    try {
      const newClub = new Club();
      const { name, num, age, status } = req.body;
      newClub.name = name;
      newClub.num = num;
      newClub.age = age;
      newClub.status = status;
      await newClub.save();
      console.log(Club);
      res.json(newClub);
    } catch (error) {
      next(error);
    }
  };
  static editClub = async function (req: Request, res: Response, next: any) {
    try {
      const edit = await Club.findOneBy({
        id: Number(req.params.id),
      });
      console.log(edit);
      const { name, num, age, status } = req.body;
      if (name) {
        edit.name = name;
      }
      if (num) {
        edit.num = num;
      }
      if (age) {
        edit.age = age;
      }
      if (status) {
        edit.status = status;
      }
      await edit.save();
      res.json(edit);
    } catch (error) {
      next(error);
    }
  };
  static getInformationClub = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const get = await Club.findOneBy({
        id: Number(req.params.id),
      });
      res.json(get);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationClub = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getall = await Club.find({
        relations: {
          players: true,
        },
      });
      res.json(getall);
    } catch (error) {
      next(error);
    }
  };
  static deleteClub = async function (req: Request, res: Response, next: any) {
    try {
      const deleteClub = await Club.findOneBy({
        id: Number(req.params.id),
      });
      await deleteClub.remove();
      res.json(deleteClub);
    } catch (error) {
      next(error);
    }
  };
}
export default ClubController;
