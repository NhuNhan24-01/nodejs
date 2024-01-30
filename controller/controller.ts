import { Request, Response } from "express"
import { Player } from "../entity/player";
class UserController{
    static createPlayer = async function (req: Request, res: Response) {
      const newPlayer = new Player();
      const {name, numPlayer,age,status} = req.body
      newPlayer.name = name
      newPlayer.numPlayer = numPlayer
      newPlayer.age = age
      newPlayer.status = status
      await newPlayer.save()
      res.json(newPlayer)
    }
    static editPlayer = async function (req: Request, res: Response) {
      // const id = Number(req.params.id)
      // const results = await myDataSource.getRepository(Player).findOneBy({
      //     id,
      // })
      // return res.send(results)
      const player = await Player.findOneBy(
        {
          id: Number(req.params.id) 
        })
      console.log(player)
      const {name, numPlayer,age,status} = req.body
      if(name ){
        player.name = name
      }
      if(numPlayer){
        player.numPlayer = numPlayer
      }
      if(age){
        player.age = age
      }
      if(status){
        player.status=status
      }
      await player.save()
      res.json(player)
      
  }
    static getInformationPlayer =  async function (req: Request, res: Response) {
  //     const players = await myDataSource.getRepository(Player).create(req.body)
  //     const results = await myDataSource.getRepository(Player).save(players)
  //     return res.send(results)
      const player = await Player.findOneBy(
      {
       id: Number(req.params.id) 
      })
      const {name, numPlayer,age,status} = req.body
      player.name = name
      player.numPlayer = numPlayer
      player.age = age
      player.status = status
      await player.save()
      res.json(player)
  }
  
    static getInformationAllPlayer =  (async function (req: Request, res: Response) {
      const player = await Player.find({
      })
      res.json(player)

   })
    static deletePlayer = async function (req: Request, res: Response) {
      const deletePlayer = await Player.findOneBy(
        {
         id: Number(req.params.id) 
        })
        await deletePlayer.remove()
        res.json(deletePlayer)
    }
   }
    export default UserController