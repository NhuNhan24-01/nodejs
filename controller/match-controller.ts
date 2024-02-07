import { Match } from "../entity/match";
import { Request, Response } from "express";
class MatchController {
  static createMatch = async function (req: Request, res: Response, next: any) {
    try {
      const newMatch = new Match();
      const { homeTeamId, awayTeamId, homeGoal, awayGoal, date, venue } =
        req.body;
      newMatch.homeTeamId = homeTeamId;
      newMatch.awayTeamId = awayTeamId;
      newMatch.homeGoal = homeGoal;
      newMatch.awayGoal = awayGoal;
      newMatch.date = date;
      newMatch.venue = venue;
      await newMatch.save();
      res.json(newMatch);
    } catch (error) {
      next(error);
    }
  };
  static editMatch = async function (req: Request, res: Response, next: any) {
    try {
      const editMatch = await Match.findOneBy({
        id: Number(req.params.id),
      });
      const { homeTeamId, awayTeamId, homeGoal, awayGoal, date, venue } =
        req.body;
      if (homeTeamId) {
        editMatch.homeTeamId = homeTeamId;
      }
      if (awayTeamId) {
        editMatch.awayTeamId = awayTeamId;
      }
      if (homeGoal) {
        editMatch.homeGoal = homeGoal;
      }
      if (awayGoal) {
        editMatch.awayGoal = awayGoal;
      }
      if (date) {
        editMatch.date = date;
      }
      if (venue) {
        editMatch.venue = venue;
      }
      await editMatch.save();
      res.json(editMatch);
    } catch (error) {
      next(error);
    }
  };
  static getInformationMatch = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getMatch = await Match.findOneBy({
        id: Number(req.params.id),
      });
      res.json(getMatch);
    } catch (error) {
      next(error);
    }
  };
  static getAllInformationMatch = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const getAllMatch = await Match.find({
        relations: {
          homeTeams: true,
          awayTeams: true,
        },
      });
      res.json(getAllMatch);
    } catch (error) {
      next(error);
    }
  };
  static deleteMatch = async function (req: Request, res: Response, next: any) {
    try {
      const deleteMatch = await Match.findOneBy({
        id: Number(req.params.id),
      });
      await deleteMatch.remove();
      res.json(deleteMatch);
    } catch (error) {
      next(error);
    }
  };
}
export default MatchController;
