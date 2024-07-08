import { UserInterface } from "../types/userTypes";
import userModel from "../models/userModel";
import bcrypt from "bcrypt"
import ResponseServicesI from "../types/resType";


const registerUser = async (userData: UserInterface): Promise<ResponseServicesI> => {
  try {
    const existingUser = await userModel.findOne({ email: userData.email });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new userModel({ ...userData, password: hashedPassword });

      await newUser.save();
      return { status: true, message: "Successful registering new user" };
    }

    return { status: false, message: "This user already exists" };
  } catch (err: any) {
    return { status: false, message: `Error registering new user: ${err.message}` };
  }
}
export default registerUser 
