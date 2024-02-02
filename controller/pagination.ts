import { Request, Response } from "express";
import { ILike } from "typeorm";
import { Player } from "../entity/player";

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
}
