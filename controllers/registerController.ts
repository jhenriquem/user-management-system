import { Request, Response } from "express";
import registerUser from "../services/register";

export default async function registerController(req: Request, res: Response) {
  try {
    const newUser = req.body;

    const resRegister = await registerUser(newUser)
    res.status(201).json({ status: "Sucessful", message: resRegister.message });
  } catch (error) {
    res.status(500).json({ status: "Error", message: `Error registering user : ${error} ` });
  }
}
