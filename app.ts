import * as express from "express";
import { myDataSource } from "./app-data-source";
import playerRouter from "./route/playerroute";
import clubRouter from "./route/clubroute";
import trainerRouter from "./route/trainroute";
import shoeRouter from "./route/shoe-route";
import ownerRouter from "./route/owner-route";
import petRouter from "./route/pet-route";
import skincareRouter from "./route/skincare-route";
import leagueRouter from "./route/league-route";
import teamRouter from "./route/team-route";
import matchRouter from "./route/match-route";
const app = express();
const port = 3002;
//establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
// register routes
//parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/player", playerRouter);
app.use("/club", clubRouter);
app.use("/trainer", trainerRouter);
app.use("/shoe", shoeRouter);
app.use("/owner", ownerRouter);
app.use("/pet", petRouter);
app.use("/skincare", skincareRouter);
app.use("/league", leagueRouter);
app.use("/team", teamRouter);
app.use("/match", matchRouter);
app.listen(port, function () {
  console.log("Your app running on port " + port);
});
