import * as express from "express";
import { PlayerMiddleware } from "../middleware/validate/player-validate";
import PlayerController from "../controller/playercontroller";
const playerRouter = express.Router();
playerRouter.post(
  "/create",
  PlayerMiddleware.validatePlayer,
  PlayerController.createPlayer
);

playerRouter.get("/search", PlayerController.searchSortFilterPlayer);
playerRouter.put("/edit/:id", PlayerController.editPlayer);

playerRouter.get("/get/:id", PlayerController.getInformationPlayer);

playerRouter.get("/getall", PlayerController.getInformationAllPlayer);

playerRouter.delete("/delete/:id", PlayerController.deletePlayer);

export default playerRouter;
