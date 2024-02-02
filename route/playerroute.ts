import * as express from "express";
import { PlayerMiddleware } from "../middleware/validate/player-validate";
import PlayerController from "../controller/playercontroller";
import { Pagination } from "../controller/pagination-controller";
const playerRouter = express.Router();
playerRouter.post(
  "/create",
  PlayerMiddleware.validatePlayer,
  PlayerController.createPlayer
);

playerRouter.get("/search", Pagination.searchSortFilterPlayer);

// playerRouter.get("/arrange", PlayerController.arrangeSortFilterPlayer);

playerRouter.put("/edit/:id", PlayerController.editPlayer);

playerRouter.get("/get/:id", PlayerController.getInformationPlayer);

playerRouter.get("/getall", PlayerController.getInformationAllPlayer);

playerRouter.delete("/delete/:id", PlayerController.deletePlayer);

export default playerRouter;
