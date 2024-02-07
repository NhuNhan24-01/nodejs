import { Request, Response } from "express";
import {
  Between,
  Equal,
  FindOptionsUtils,
  FindOptionsWhere,
  ILike,
  LessThan,
  Like,
  MoreThan,
  MoreThanOrEqual,
} from "typeorm";
import { Player } from "../entity/player";
import { Pet } from "../entity/pet";
import { League } from "../entity/league";
import { Team } from "../entity/team";
import { Match } from "../entity/match";

export class Pagination {
  static searchSortFilterPlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    let where = {};
    let orderBy = req.query.orderBy || "name";
    let sortBy = req.query.sortBy || "ASC";
    const take = Number(req.query.limit);
    const skip = Number(req.query.page) * take;
    /// nếu tồn tại điều kiện tìm kiếm theo tên
    if (req.query.name) {
      where = { name: ILike(`%${req.query.name}%`) }; // thêm điều kiện tìm kiếm theo tên tại đây
    }
    /// nếu tồn tại điều kiện cột sắp xếp và thứ tự sắp xếp
    const order = { [orderBy as any]: sortBy };
    // const players = await Player.find({ order, where }); // truyền điều kiện order where tại đây
    const [result, total] = await Player.findAndCount({
      where: where,
      order: order,
      take: take,
      skip: skip,
    });

    return res.json({
      data: result,
      count: total,
    });
  };

  static searchSortFilterPet = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    let where: FindOptionsWhere<Pet>[] | FindOptionsWhere<Pet> = {};
    let orderBy = req.query.orderBy || "name";
    let sortBy = req.query.sortBy || "ASC";
    const take = Number(req.query.limit) || 10;
    const skip = Number(req.query.page || 0) * take;
    const order = { [orderBy as any]: sortBy };
    console.log(take);
    if (req.query.name) {
      where = {
        name: ILike(`%${req.query.name}%`),
      };
    }
    if (req.query.color) {
      where = {
        ...where,
        color: ILike(req.query.color),
      };
      if (req.query.ownerName) {
        where = {
          ...where,
          owners: { name: Like(req.query.ownerName) },
        };
      }
    }
    if (req.query.startWeight && !req.query.endWeight) {
      where = {
        ...where,
        weight: MoreThan(req.query.startWeight) as any,
      };
    } else if (req.query.endWeight && !req.query.startWeight) {
      where = {
        ...where,
        weight: LessThan(req.query.endWeight) as any,
      };
    } else if (req.query.endWeight && req.query.startWeight) {
      where = {
        ...where,
        weight: Between(req.query.startWeight, req.query.endWeight) as any,
      };
    }
    // console.log(where);
    const [result, total] = await Pet.findAndCount({
      relations: {
        owners: true,
      },
      where: where,
      order: order,
      take: take,
      skip: skip,
    });
    return res.json({
      data: result,
      count: total,
    });
  };
  static searchSortFilterLeague = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    let where: FindOptionsWhere<League>[] | FindOptionsWhere<League> = {};
    let orderBy = req.query.orderBy || "name";
    let sortBy = req.query.sortBy || "ASC";
    const take = Number(req.query.limit) || 10;
    const skip = Number(req.query.page || 0) * take;
    const order = { [orderBy as any]: sortBy };
    if (req.query.name) {
      where = {
        name: ILike(`%${req.query.name}%`),
      };
    }
    if (req.query.country) {
      where = {
        country: ILike(`%${req.query.country}%`),
      };
    }
    if (req.query.founded) {
      where = {
        founded: ILike(`%${req.query.founded}%`),
      };
    }
    if (req.query.teamName) {
      where = {
        teams: { name: ILike(`%${req.query.teamName}%`) },
      };
    }
    const [result, total] = await League.findAndCount({
      relations: {
        teams: true,
      },
      where: where,
      order: order,
      take: take,
      skip: skip,
    });
    return res.json({
      data: result,
      count: total,
    });
  };

  static searchSortFilterTeam = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    let where: FindOptionsWhere<Team>[] | FindOptionsWhere<Team> = {};
    let orderBy = req.query.orderBy || "name";
    let sortBy = req.query.sortBy || "ASC";
    const take = Number(req.query.limit) || 10;
    const skip = Number(req.query.page || 0) * take;
    const order = { [orderBy as any]: sortBy };
    if (req.query.leagueId) {
      where = {
        leagueId: ILike(`%${req.query.leagueId}%`),
      };
    }
    if (req.query.name) {
      where = {
        name: ILike(`%${req.query.name}%`),
      };
    }
    if (req.query.city) {
      where = {
        ...where,
        city: ILike(`%${req.query.city}%`),
      };
    }
    if (req.query.stadium) {
      where = {
        ...where,
        stadium: ILike(`%${req.query.stadium}%`),
      };
    }
    if (req.query.founded) {
      where = {
        ...where,
        founded: ILike(`%${req.query.founded}%`),
      };
    }
    // if (req.query.teamName) {
    //   where = {
    //     teams: { name: ILike(`%${req.query.teamName}%`) },
    //   };
    // }
    const [result, total] = await Team.findAndCount({
      where: where,
      order: order,
      take: take,
      skip: skip,
    });
    return res.json({
      data: result,
      count: total,
    });
  };
  static searchSortFilterMatch = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    let where: FindOptionsWhere<Match>[] | FindOptionsWhere<Match> = {};
    let orderBy = req.query.orderBy || "venue";
    let sortBy = req.query.sortBy || "ASC";
    const take = Number(req.query.limit) || 10;
    const skip = Number(req.query.page || 0) * take;
    const order = { [orderBy as any]: sortBy };
    if (req.query.homeTeamId) {
      where = {
        homeTeamId: ILike(`%${req.query.homeTeamId}%`),
      };
    }
    if (req.query.awayTeamId) {
      where = {
        ...where,
        awayTeamId: ILike(`%${req.query.awayTeamId}%`),
      };
    }
    if (req.query.homeGoal) {
      where = {
        ...where,
        homeGoal: ILike(`%${req.query.homeGoal}%`),
      };
    }
    if (req.query.awayGoal) {
      where = {
        ...where,
        awayGoal: ILike(`%${req.query.awayGoal}%`),
      };
    }
    if (req.query.venue) {
      where = {
        venue: ILike(`%${req.query.venue}%`),
      };
    }
    if (req.query.date) {
      where = {
        date: Equal(`%${req.query.date}%`) as any,
      };
    }
    const [result, total] = await Match.findAndCount({
      where: where,
      order: order,
      take: take,
      skip: skip,
    });
    return res.json({
      data: result,
      count: total,
    });
  };
}
