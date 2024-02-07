import * as express from "express";
import MatchController from "../controller/match-controller";
import { Pagination } from "../controller/pagination-controller";
const matchRouter = express.Router();
matchRouter.get("/search", Pagination.searchSortFilterMatch);
matchRouter.post("/create", MatchController.createMatch);
matchRouter.put("/edit/:id", MatchController.editMatch);
matchRouter.get("/get/:id", MatchController.getInformationMatch);
matchRouter.get("/getall", MatchController.getAllInformationMatch);
matchRouter.delete("/delete/:id", MatchController.deleteMatch);
export default matchRouter;