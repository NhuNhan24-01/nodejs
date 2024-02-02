import * as express from "express";
import { PlayerMiddleware } from "../middleware/validate/player-validate";
import UserController from "../controller/playercontroller";
const playerRouter = express.Router();
playerRouter.post(
  "/create",
  PlayerMiddleware.validatePlayer,
  UserController.createPlayer
);

playerRouter.put("/edit/:id", UserController.editPlayer);

playerRouter.get("/get/:id", UserController.getInformationPlayer);

playerRouter.get("/getall", UserController.getInformationAllPlayer);

playerRouter.delete("/delete/:id", UserController.deletePlayer);

export default playerRouter;
