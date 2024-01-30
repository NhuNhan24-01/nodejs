
import * as express from 'express'
import ClubController from '../controller/clubcontroller'
const clubRouter = express.Router()
clubRouter.post("/create",ClubController.createClub )
export default clubRouter;