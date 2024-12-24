import express from "express";
import { loginUser, signupUser, loginAdmin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", loginAdmin);

export default userRouter;
