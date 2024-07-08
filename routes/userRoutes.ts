import { Router } from "express"
import registerController from "../controllers/registerController"
import loginController from "../controllers/loginController"
import { checkUserExists } from "../middlewares/checkUserExists"
import authJWToken from "../middlewares/authJWToken"
import profileController from "../controllers/profileController"
const userRouter = Router()

userRouter.post("/register", checkUserExists, registerController)

userRouter.post("/login", loginController)

userRouter.get("/profile", authJWToken, profileController)

export default userRouter

