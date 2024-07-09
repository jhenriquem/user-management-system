import { UserInterface } from "../types/userTypes";
import userModel from "../models/userModel";
import bcrypt from "bcrypt"
import ResponseServicesI from "../types/resType";


const registerUser = async (userData: UserInterface): Promise<ResponseServicesI> => {
  try {

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new userModel({ ...userData, password: hashedPassword });

    await newUser.save();
    return { status: "Successful", message: "Successful registering new user" };
  }

  catch (err: any) {
    return { status: "Error", message: `Error registering new user: ${err.message}` };
  }
}
export default registerUser 
