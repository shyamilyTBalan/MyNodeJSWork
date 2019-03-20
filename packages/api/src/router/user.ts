import { NextFunction, Request, Response, Router } from "express";
import { login} from "../services/login";
import { auth} from "../services/autheticate";


const router = Router({ mergeParams: true });
router.post("/login/:id", async(req: Request, res: Response, next: NextFunction) => {
    const signin= await login(req,res);
    res.status(200).json(signin)
    next();
    })
  
  
router.post("/", async(req: Request, res: Response, next: NextFunction)=>{
   console.log('inside users!!!!')
    const authe= await auth(req,res);
    res.status(201).json(authe);
    
  })