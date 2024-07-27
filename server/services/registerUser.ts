import { UserInterface } from "../types/userTypes";
import userModel from "../models/userModel";
import bcrypt from "bcrypt"

const registerUser = async (userData: UserInterface) => {
  try {

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new userModel({ ...userData, password: hashedPassword });

    await newUser.save();
    return { status: "Successful" };
  }

  catch (err: any) {
    return { status: "Error", error: err.message };
  }
}
export default registerUser 
