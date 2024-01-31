import * as express from "express";
import trainerController from "../controller/trainercontroller";
const trainerRouter = express.Router();
trainerRouter.post("/create", trainerController.createTrainer);
trainerRouter.put("/edit/:id", trainerController.editTrainer);
trainerRouter.get("/get/:id", trainerController.getInformationTrainer);
trainerRouter.get("/getall", trainerController.getAllInformationTrainer);
trainerRouter.delete("/delete/:id", trainerController.deleteHlv);
export default trainerRouter;
