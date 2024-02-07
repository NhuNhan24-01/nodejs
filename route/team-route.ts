import * as express from "express";
import TeamController from "../controller/team-controller";
import { Pagination } from "../controller/pagination-controller";
const teamRouter = express.Router();
teamRouter.get("/search", Pagination.searchSortFilterTeam);
teamRouter.post("/create", TeamController.createTeam);
teamRouter.put("/edit/:id", TeamController.editTeam);
teamRouter.get("/get/:id", TeamController.getInformationTeam);
teamRouter.get("/getall", TeamController.getAllInformationTeam);
teamRouter.delete("/delete/:id", TeamController.deleteTeam);
export default teamRouter;
