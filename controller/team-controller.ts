import { League } from "entity/league";
import { Team } from "../entity/team";
import { Request, Response } from "express";
class TeamController {
  static createTeam = async function (req: Request, res: Response, next: any) {
    try {
      const newTeam = new Team();
      const { leagueId, name, city, stadium, founded } = req.body;
      newTeam.leagueId = leagueId;
      newTeam.name = name;
      newTeam.city = city;
      newTeam.stadium = stadium;
      newTeam.founded = founded;
      await newTeam.save();
      res.json(newTeam);
    } catch (error) {
      next(error);
    }
  };
  static editTeam = async function (req: Request, res: Response, next: any) {
    try {
      const editTeam = await Team.findOneBy({
        id: Number(req.params.id),
      });
      const { leagueId, name, city, stadium, founded } = req.body;
      if (leagueId) {
        editTeam.leagueId = leagueId;
      }
      if (name) {
        editTeam.name = name;
      }
      if (city) {
        editTeam.city = city;
      }
      if (stadium) {
        editTeam.stadium = stadium;
      }
      if (founded) {
        editTeam.founded = founded;
      }
      await editTeam.save();
      res.json(editTeam);
    } catch (error) {
      next(error);
    }
  };
  static getInformationTeam = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getTeam = await Team.findOneBy({
        id: Number(req.params.id),
      });
      res.json(getTeam);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationTeam = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getAllTeam = await Team.find({
        relations: {
          leagues: true,
          homeMatchs: true,
          awayMatchs: true,
        },
      });
      res.json(getAllTeam);
    } catch (error) {
      next(error);
    }
  };

  static deleteTeam = async function (req: Request, res: Response, next: any) {
    try {
      const deleteTeam = await Team.findOneBy({
        id: Number(req.params.id),
      });
      await deleteTeam.remove();
      res.json(deleteTeam);
    } catch (error) {
      next(error);
    }
  };
}
export default TeamController;
