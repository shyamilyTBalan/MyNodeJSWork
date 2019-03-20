
/*import express,{ NextFunction, Request, Response, Router } from "express";
import { userService } from "./services/user";
import { login } from "./services/login";
import {auth} from "./services/autheticate"
const runningEnvironment = (process.env.RUNNING_ENV as string) || "development";
const { getAllUsers } = userService[runningEnvironment];
export const app = express();
app.use(express.json())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const jwt  = require('jsonwebtoken');
const router = Router();
const mysql = require('mysql');
import {pool } from "./services/db";
import {pg,Pool} from "pg";*/

//////////////////////////////////////


import express, { Response } from "express";
import { userRouter } from "./router";

const app = express();
app.use(express.json());
app.enable("trust proxy");

app.use("/users",userRouter);

export default app;






 

    
  
 