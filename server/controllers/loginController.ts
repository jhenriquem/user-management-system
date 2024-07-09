import { Request, Response } from "express";
import loginUser from "../services/login";
import { validationUserI } from "../types/userTypes";

export default async function loginController(req: Request, res: Response) {

  try {
    if (!req.body) {
      console.log("errr")
      return res.status(400).json("ddkjn")
    }
    const user: validationUserI = req.body

    const validateUser = await loginUser(user)
    let statusCode: number = 500

    switch (validateUser.status) {
      case "Successful":
        statusCode = 200
        break;
      case "Unauthenticated":
        statusCode = 401
        break;
    }
    return res.status(statusCode).json(validateUser)
  }

  catch (err: any) {
    return res.status(500).json({ status: "Error", message: err.message })
  }

}
