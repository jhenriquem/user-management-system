import { Request, Response } from "express";
import loginUser from "../services/login";
import { validationUserI } from "../types/userTypes";

export default async function loginController(req: Request, res: Response) {

  try {
    const user: validationUserI = req.body
    const validateUser = await loginUser(user)

    if (validateUser.status) {
      return res.status(200).json({ status: "Sucessful", tk: validateUser.tk })
    }
    else if (!validateUser.status) {
      return res.status(401).json({ status: "Unauthenticated", message: validateUser.message })
    }
    else {
      return res.status(500).json({ status: "Error", message: validateUser.message })
    }
  }

  catch (err: any) {
    return res.status(500).json({ status: "Error", message: err.message })
  }

}
