import { Request, Response } from "express";
import findUser from "../services/findUser";

export default async function profileController(req: Request, res: Response) {
  try {
    const id = req.body.userId
    const response = await findUser(id)

    if (response.status === "Error") {
      return res.status(500).json({ statusMessage: "Error when trying to find the user", error: response.error })
    }

    return res.status(200).json({ message: response })
  } catch (err: any) {
    return res.status(500).json({ statusMessage: "Error when trying to find the user", error: err.message })
  }
}
