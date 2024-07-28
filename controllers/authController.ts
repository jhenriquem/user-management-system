import { Request, Response } from "express";
import authUser from "../services/authUser";
import { authUserI } from "../types/userTypes";

export default async function authController(req: Request, res: Response) {

  try {
    const user: authUserI = req.body

    const validateUser = await authUser(user)

    if (validateUser.status === "Unauthenticated") {
      return res.status(404).json({ statusMessage: "User not found" })
    }

    else if (validateUser.status === "Error") {
      return res.status(500).json({ statusMessage: "Error trying to authenticate user", error: validateUser.message })
    }

    const responseJson = {
      statusMessage: validateUser.status,
      token: validateUser.tk
    }

    return res.status(202).json(responseJson)
  }

  catch (err: any) {
    return res.status(500).json({ statusMessage: "Error trying to authenticate user", error: err.message })
  }

}
