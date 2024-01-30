import { Request, Response } from "express"
import { Club } from "../entity/Club";
import { myDataSource } from "../app-data-source";
class ClubController{
    static createClub = async function (req: Request, res: Response) {
      const newClub = new Club();
      const {nameClub, numClub,age,status} = req.body
      // newClub.nameClub = nameClub
      // newClub.numClub = numClub
      newClub.age = age
      newClub.status = status
      console.log("aaaaa",newClub)
      const clubRepo = myDataSource.getRepository(Club)
      await clubRepo.save(newClub)
      console.log(Club)
      res.json(null)
  }
}
export default ClubController