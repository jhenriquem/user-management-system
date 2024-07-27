import { Request, Response } from "express";
import registerUser from "../services/registerUser";

export default async function registerController(req: Request, res: Response) {
  try {
    const newUser = req.body;

    const responseOfRegister = await registerUser(newUser)

    if (responseOfRegister.status === "Error") {
      return res.status(500).json({ statusMessage: "Error trying to register user", error: responseOfRegister.error });
    }
    return res.status(201).json({ statusMessage: "Success registering new user" });
  } catch (err: any) {
    return res.status(500).json({ message: "Error trying to register user", error: err.message });
  }
}
