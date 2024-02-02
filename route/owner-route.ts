import * as express from "express";
import OwnerController from "../controller/owner-controller";
import { OwnerMiddleware } from "../middleware/validate/owner-validate";
const ownerRouter = express.Router();
ownerRouter.post(
  "/create",
  OwnerMiddleware.validateOwner,
  OwnerController.createOwner
);
ownerRouter.put("/edit/:id", OwnerController.editOwner);
ownerRouter.get("/get/:id", OwnerController.getInformationOwner);
ownerRouter.get("/getall", OwnerController.getAllInformationOwner);
ownerRouter.delete("/delete/:id", OwnerController.deleteOwner);
export default ownerRouter;
