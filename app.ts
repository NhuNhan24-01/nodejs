import * as express from 'express'
import { myDataSource } from "./app-data-source"
import playerRouter from './route/user'
import clubRouter from './route/club'
const app = express()
const port = 3002
//establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log(myDataSource)
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
    // register routes
//parse requests of content-type - application/json
app.use(express.json());
 app.use(express.urlencoded({ extended: true })); 
 app.use('/player',playerRouter)
 app.use('/club',clubRouter)
app.listen(port, function(){
    console.log('Your app running on port '+ port);
    })