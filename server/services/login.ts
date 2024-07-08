import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { validationUserI } from "../types/userTypes";
import bcrypt from "bcrypt";
import ResponseServicesI from "../types/resType";

const loginUser = async (userData: validationUserI): Promise<ResponseServicesI> => {
  try {
    const user = await userModel.findOne({ email: userData.email });

    if (user) {
      const isMatch = await bcrypt.compare(userData.password, user.password);

      if (isMatch) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.SECRET_KEY_JWT as string, { expiresIn: "1h" }
        );

        return { status: true, message: "Correct credentials", tk: token };
      }
    }

    return { status: false, message: "Incorrect credentials" };
  } catch (err: any) {
    return { status: "Error", message: `Error logging in: ${err.message}` };
  }
};

export default loginUser;

