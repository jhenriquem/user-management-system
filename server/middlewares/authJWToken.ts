import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export default function authJWToken(req: Request, res: Response, next: NextFunction) {
  try {
    const autheader = req.headers["authorization"]

    const requestToken = autheader?.split(" ")[2]
    if (!autheader || !requestToken)
      res.status(403).json({ status: "Not authorized", message: "You don't have the authorization token" })


    jwt.verify(requestToken as string, process.env.SECRET_KEY_JWT as string, (err, decoded) => {
      if (err) res.status(401).json({ status: "Error", message: err.message })

      req.body.userId = (decoded as JwtPayload).userId

      next()
    })


  } catch (err: any) {
    res.status(400).json({ status: "Error", message: err.message })
  }
}
