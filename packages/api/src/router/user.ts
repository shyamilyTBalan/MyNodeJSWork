import { Request, Response, Router } from "express";
import { login } from "../services/login";
import { signup } from "../services/_authentication_";
import { getAllUsers } from "../services/user";
const router = Router({ mergeParams: true });

//user signup
router.post("/signup", async (req: Request, res: Response) => {
  const registerUser = await signup(req.body);
  res.status(200).json(registerUser)
})

//user login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const signIn = await login(req.body);
    res.status(200).json(signIn)
  }
  catch (error) {
    res.status(201).json("Password Is Not Matching...Please Try Again..")
  }
})

//getAllUsers
router.get("/", async (req: Request, res: Response) => {
  const allUsers = await getAllUsers();
  res.status(200).json(allUsers)
})


export default router;


