
import * as express from 'express'
import UserController from '../controller/controller'
const playerRouter = express.Router()
playerRouter.post("/create",UserController.createPlayer )

playerRouter.put("/edit/", UserController.editPlayer)

playerRouter.get("/get/:id", UserController.getInformationPlayer )

playerRouter.get("/getall",UserController.getInformationAllPlayer )

playerRouter.delete("/delete",UserController.deletePlayer) 
export default playerRouter;