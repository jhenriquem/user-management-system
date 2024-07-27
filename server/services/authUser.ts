import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { authUserI } from "../types/userTypes";
import bcrypt from "bcrypt";

const authUser = async (userData: authUserI) => {
  try {
    const user = await userModel.findOne({ email: userData.email });

    if (user) {
      const isMatch = await bcrypt.compare(userData.password, user.password);

      if (isMatch) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.SECRET_KEY_JWT as string, { expiresIn: "1h" }
        );

        return { status: "Authenticated", tk: token };
      }
    }
    return { status: "Unauthenticated" };
  } catch (err: any) {
    return { status: "Error", message: err.message };
  }
};

export default authUser;

