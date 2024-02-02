import { ClubMiddleware } from "../middleware/validate/club-validate";
import * as express from "express";
import ClubController from "../controller/clubcontroller";
const clubRouter = express.Router();
clubRouter.post(
  "/create",
  ClubMiddleware.validateClub,
  ClubController.createClub
);
clubRouter.put("/edit/:id", ClubController.editClub);
clubRouter.get("/get/:id", ClubController.getInformationClub);
clubRouter.get("/getall", ClubController.getAllInformationClub);
clubRouter.delete("/delete/:id", ClubController.deleteClub);
export default clubRouter;
