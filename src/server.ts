require("dotenv").config()
import express from "express";


import router from "./routes/router";
import database from "./database/connection";
import logger from "../log";
import pino from "pino-http";

const app = express();

const pinoHttp = pino({logger});

//middlewares - json and enabling method post
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//show logs request
app.use(pinoHttp);

//routers
app.use("/", router);

//server running
const port = 8080;
app.listen(port, async () =>{
  await database.connect();
  logger.info(`Server listening on port ${port}`);
})