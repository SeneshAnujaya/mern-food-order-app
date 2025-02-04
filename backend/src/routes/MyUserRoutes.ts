
import  express  from "express";
import  { createCurrentUser } from "../controllers/MyUsercontroller";

const router = express.Router();

router.post("/", createCurrentUser);

export default router;
