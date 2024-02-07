import { League } from "../entity/league";
import { Request, Response } from "express";
class LeagueController {
  static createLeague = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const newLeague = new League();
      const { name, country, founded } = req.body;
      newLeague.name = name;
      newLeague.country = country;
      newLeague.founded = founded;
      await newLeague.save();
      res.json(newLeague);
    } catch (error) {
      next(error);
    }
  };
  static editLeague = async function (req: Request, res: Response, next: any) {
    try {
      const editLeague = await League.findOneBy({
        id: Number(req.params.id),
      });
      const { name, country, founded } = req.body;
      if (name) {
        editLeague.name = name;
      }
      if (country) {
        editLeague.country = country;
      }
      if (founded) {
        editLeague.founded = founded;
      }
      await editLeague.save();
      res.json(editLeague);
    } catch (error) {
      next(error);
    }
  };
  static getInformationLeague = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getLeague = await League.findOneBy({
        id: Number(req.params.id),
      });
      res.json(getLeague);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationLeague = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getAllLeague = await League.find({
        relations: {
          teams: true,
        },
      });
      res.json(getAllLeague);
    } catch (error) {
      next(error);
    }
  };
  static deleteLeague = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const deleteLeague = await League.findOneBy({
        id: Number(req.params.id),
      });
      await deleteLeague.remove();
      res.json(deleteLeague);
    } catch (error) {
      next(error);
    }
  };
}

export default LeagueController;
