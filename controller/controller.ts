import { Request, Response } from "express";
import { Player } from "../entity/player";
import { Club } from "../entity/club";
import { myDataSource } from "../app-data-source";
class UserController {
  static createPlayer = async function (
    req: Request,
    res: Response,
    next: any
  ) {
    try {
      const newPlayer = new Player();
      const { clubId, name, numPlayer, age, status } = req.body;
      const club = await Club.findOneBy({
        id: clubId,
      });
      if (!club) throw new Error(`Can't find club with clubId ${clubId}`);
      newPlayer.clubId = clubId;

      newPlayer.name = name;
      newPlayer.numPlayer = numPlayer;
      newPlayer.age = age;
      newPlayer.status = status;
      await newPlayer.save();
      res.json(newPlayer);
    } catch (e) {
      next(e);
    }
  };
  static editPlayer = async function (req: Request, res: Response) {
    // const id = Number(req.params.id)
    // const results = await myDataSource.getRepository(Player).findOneBy({
    //     id,
    // })
    // return res.send(results)
    const player = await Player.findOneBy({
      id: Number(req.params.id),
    });
    console.log(player);
    const { clubId, name, numPlayer, age, status } = req.body;
    if (clubId) {
      player.clubId = clubId;
    }
    if (name) {
      player.name = name;
    }
    if (numPlayer) {
      player.numPlayer = numPlayer;
    }
    if (age) {
      player.age = age;
    }
    if (status) {
      player.status = status;
    }
    await player.save();
    res.json(player);
  };
  static getInformationPlayer = async function (req: Request, res: Response) {
    const player = await Player.findOneBy({
      id: Number(req.params.id),
    });
    const { clubId, name, numPlayer, age, status } = req.body;
    player.clubId = clubId;
    player.name = name;
    player.numPlayer = numPlayer;
    player.age = age;
    player.status = status;
    await player.save();
    res.json(player);
  };

  static getInformationAllPlayer = async function (
    req: Request,
    res: Response
  ) {
    const player = await Player.find({
      relations: {
        clubs: true,
      },
    });
    res.json(player);
  };
  static deletePlayer = async function (req: Request, res: Response) {
    const deletePlayer = await Player.findOneBy({
      id: Number(req.params.id),
    });
    await deletePlayer.remove();
    res.json(deletePlayer);
  };
}
export default UserController;
