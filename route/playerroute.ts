import * as express from "express";
import UserController from "../controller/playercontroller";
const playerRouter = express.Router();
playerRouter.post("/create", UserController.createPlayer);

playerRouter.put("/edit/:id", UserController.editPlayer);

playerRouter.get("/get/:id", UserController.getInformationPlayer);

playerRouter.get("/getall", UserController.getInformationAllPlayer);

playerRouter.delete("/delete/:id", UserController.deletePlayer);
export default playerRouter;
