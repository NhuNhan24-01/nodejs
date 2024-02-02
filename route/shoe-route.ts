import ShoeController from "../controller/shoe-controller";
import * as express from "express";
import { ShoeMiddleware } from "../middleware/validate/shoe-validate";
const shoeRouter = express.Router();
shoeRouter.post(
  "/create",
  ShoeMiddleware.validateShoe,
  ShoeController.createShoe
);
shoeRouter.put("/edit/:id", ShoeController.editShoe);
shoeRouter.get("/get/:id", ShoeController.getInformationShoe);
shoeRouter.get("/getall", ShoeController.getAllInformationShoe);
shoeRouter.delete("/delete/:id", ShoeController.deleteShoe);
export default shoeRouter;
