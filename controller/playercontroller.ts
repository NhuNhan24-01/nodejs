import { Request, Response } from "express";
import { Player } from "../entity/player";
import { Club } from "../entity/club";
import { myDataSource } from "../app-data-source";
import { Shoe } from "../entity/shoe";
import { ILike, Like } from "typeorm";
class PlayerController {
  static createPlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const newPlayer = new Player();
      const { shoeId, clubId, name, num, age, status } = req.body;
      const club = await Club.findOneBy({
        id: clubId,
      });
      if (!club) throw new Error(`Can't find club with clubId ${clubId}`);

      const shoe = await Shoe.findOneBy({
        id: shoeId,
      });
      if (!shoe) throw new Error(`Can't find shoe with shoeID ${shoeId}`);

      newPlayer.shoeId = shoeId;
      newPlayer.clubId = clubId;
      newPlayer.name = name;
      newPlayer.num = num;
      newPlayer.age = age;
      newPlayer.status = status;
      await newPlayer.save();
      res.json(newPlayer);
    } catch (error) {
      next(error);
    }
  };
  static editPlayer = async function (req: Request, res: Response, next: any) {
    try {
      const player = await Player.findOneBy({
        id: Number(req.params.id),
      });
      console.log(player);
      const { shoeId, clubId, name, num, age, status } = req.body;
      if (shoeId) {
        player.shoeId = shoeId;
      }
      if (clubId) {
        player.clubId = clubId;
      }
      if (name) {
        player.name = name;
      }
      if (num) {
        player.num = num;
      }
      if (age) {
        player.age = age;
      }
      if (status) {
        player.status = status;
      }
      await player.save();
      res.json(player);
    } catch (error) {
      next(error);
    }
  };
  static getInformationPlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const player = await Player.findOneBy({
        id: Number(req.params.id),
      });
      res.json(player);
    } catch (error) {
      next(error);
    }
  };

  static getInformationAllPlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const player = await Player.find({
        relations: {
          clubs: true,
          shoes: true,
        },
      });
      res.json(player);
    } catch (error) {
      next(error);
    }
  };
  static deletePlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const deletePlayer = await Player.findOneBy({
        id: Number(req.params.id),
      });
      await deletePlayer.remove();
      res.json(deletePlayer);
    } catch (error) {
      next(error);
    }
  };
  // static searchSortFilterPlayer = async function (
  //   req: Request,
  //   res: Response,
  //   next: any
  // ) {
  //   let where = {};
  //   /// nếu tồn tại điều kiện tìm kiếm theo tên
  //   if (req.query.name) {
  //     where = { name: ILike(`%${req.query.name}%`) }; // thêm điều kiện tìm kiếm theo tên tại đây
  //   }
  //   const players = await Player.find({ where }); // truyền where tại đây
  //   res.json(players);
  // };
  // static arrangeSortFilterPlayer = async function (
  //   req: Request,
  //   res: Response,
  //   next: any
  // ) {
  //   let orderBy = req.query.orderBy || "name";
  //   let sortBy = req.query.sortBy || "ASC";
  //   /// nếu tồn tại điều kiện cột sắp xếp và thứ tự sắp xếp

  //   const order = { [orderBy as any]: sortBy };

  //   const players = await Player.find({ order }); // truyền điều kiện order tại đây
  //   res.json(players);
  // };
}
export default PlayerController;
