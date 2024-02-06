import { Request, Response } from "express";
import {
  Between,
  FindOptionsWhere,
  ILike,
  LessThan,
  Like,
  MoreThan,
  MoreThanOrEqual,
} from "typeorm";
import { Player } from "../entity/player";
import { Pet } from "../entity/pet";
import { Owner } from "../entity/owner";

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
    console.log(skip);
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
}
