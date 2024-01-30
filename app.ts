import * as express from "express"
import { Request, Response } from "express"
import { User } from "./entity/user"
import { myDataSource } from "./app-data-source"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


