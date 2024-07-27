import { Request, Response } from "express";
import registerUser from "../services/register";

export default async function registerController(req: Request, res: Response) {
  try {
    if (!req.body) {
      console.log("errr")
      return res.status(400).json("ddkjn")
    }
    const newUser = req.body;

    const resRegister = await registerUser(newUser)
    let statusCode: number = 500

    if (resRegister.status === "Successful") statusCode = 201

    return res.status(statusCode).json(resRegister);
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error: error });
  }
}
