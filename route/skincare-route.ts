import * as express from "express";
import SkincareController from "../controller/skincare-controller";
import { SkincareMiddleware } from "../middleware/validate/skincare-validate";
const skincareRouter = express.Router();
skincareRouter.post(
  "/create",
  SkincareMiddleware.validateSkincare,
  SkincareController.createSkincare
);
skincareRouter.put("/edit/:id", SkincareController.editSkincare);
skincareRouter.get("/get/:id", SkincareController.getInformationSkincare);
skincareRouter.get("/getall", SkincareController.getAllInformationSkincare);
skincareRouter.delete("/delete/:id", SkincareController.deleteSkincare);
export default skincareRouter;
