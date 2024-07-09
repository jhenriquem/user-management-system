import { Request, Response } from "express";
import getUser from "../services/getUser";

export default async function profileController(req: Request, res: Response) {
  try {
    const id = req.body.userId
    const response = await getUser(id)
    let statusCode = 500

    if (response.status === "Successful") statusCode = 200

    return res.status(statusCode).json(response)
  } catch (err) {
    return res.status(500).json({ message: "Error when trying to return user data" })
  }
}
