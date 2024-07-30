import { NextFunction, Request, Response } from "express";
import { authUserI, UserInterface } from "../types/userTypes";

function checkPassedData(req: Request, res: Response, next: NextFunction) {

  try {
    const userData: UserInterface | authUserI = req.body
    const resCheck = Object.values(userData).every((value) => value !== "")

    if (!resCheck) {
      return res.status(400).json("Incomplete credentials")
    }
    next()
  } catch (err) {
    return res.status(500).json({ message: 'Error in the middleware responsible for data checking', error: err });
  }
}

export default checkPassedData
