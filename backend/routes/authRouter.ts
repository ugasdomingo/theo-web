//Import tools
import { Router } from "express";
import { dataAuthValidation } from "../middleware/dataAuthValidation";
import {
	register,
	login,
	refresh,
	logout,
} from "../controllers/usersController";

//Define router
const authRouter = Router();

//Routes
authRouter.post("/register", dataAuthValidation, register);

authRouter.post("/login", dataAuthValidation, login);

authRouter.get("/refresh", refresh);

authRouter.post("/logout", logout);

//Export routes
export default authRouter;