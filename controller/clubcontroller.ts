import { Request, Response } from "express";
import { Club } from "../entity/club";
class ClubController {
  static createClub = async function (req: Request, res: Response) {
    const newClub = new Club();
    const { nameClub, numClub, age, status } = req.body;
    newClub.nameClub = nameClub;
    newClub.numClub = numClub;
    newClub.age = age;
    newClub.status = status;
    await newClub.save();
    console.log(Club);
    res.json(newClub);
  };
  static editClub = async function (req: Request, res: Response) {
    const club = await Club.findOneBy({
      id: Number(req.params.id),
    });
    console.log(club);
    const { nameClub, numClub, age, status } = req.body;
    if (nameClub) {
      club.nameClub = nameClub;
    }
    if (numClub) {
      club.numClub = numClub;
    }
    if (age) {
      club.age = age;
    }
    if (status) {
      club.status = status;
    }
    await club.save();
    res.json(club);
  };
  static getInformationClub = async function (req: Request, res: Response) {
    const club = await Club.findOneBy({
      id: Number(req.params.id),
    });
    const { nameClub, numClub, age, status } = req.body;
    club.nameClub = nameClub;
    club.numClub = numClub;
    club.age = age;
    club.status = status;
    await club.save();
    res.json(club);
  };
  static getAllInformationClub = async function (req: Request, res: Response) {
    const club = await Club.find({
      relations: {
        players: true,
      },
    });
    res.json(club);
  };
  static deleteClub = async function (req: Request, res: Response) {
    const deleteClub = await Club.findOneBy({
      id: Number(req.params.id),
    });
    await deleteClub.remove();
    res.json(deleteClub);
  };
}
export default ClubController;
