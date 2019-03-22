import { NextFunction, Request, Response, Router } from "express";
import { login } from "../services/login";
import { signup } from "../services/signup";
import { getAllUsers } from "../services/getAllUser";
import { getPool } from "../services/db";
const router = Router({ mergeParams: true });

//user signup
router.post("/signup", async (req: Request, res: Response) => {
  const pool = await getPool();
  const signup_user = await signup(req.body);
  res.status(200).json(signup_user)
})

//user login
router.post("/login", async (req: Request, res: Response) => {
  const pool = await getPool();
  const signin = await login(req, res, pool);
  res.status(200).json(signin)
})

//getAllUsers
router.get("/", async (req: Request, res: Response) => {
  //const pool = await getPool();
  const AllUsers = await getAllUsers(req, res);
  res.status(200).json(AllUsers)
})


export default router;


