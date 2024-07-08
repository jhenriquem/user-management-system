import { Request, Response } from "express";
import getUser from "../services/getUser";

export default async function profileController(req: Request, res: Response) {

  try {
    const id = req.body.userId
    const response = await getUser(id)

    if (response.status === "Sucessful") {
      return res.status(200).json(response)
    }
    else {
      return res.status(500).json(response)
    }
  } catch (err) {
    return res.status(500).json({ message: "Error when trying to return user data" })
  }
}
