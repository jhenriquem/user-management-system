import { Router } from "express"
import registerController from "../controllers/registerController"
import authController from "../controllers/authController"
import { checkUserExists } from "../middlewares/checkUserExists"
import authJWToken from "../middlewares/authJWToken"
import userController from "../controllers/userController"
import checkPassedData from "../middlewares/checkPassedData"
const userRouter = Router()

userRouter.post("/auth", checkPassedData, authController)

userRouter.post("/", checkPassedData, checkUserExists, registerController)

userRouter.get("/", authJWToken, userController)

export default userRouter

