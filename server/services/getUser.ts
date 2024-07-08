import userModel from "../models/userModel";
import ResponseServicesI from "../types/resType";

const getUser = async (userId: string): Promise<ResponseServicesI> => {

  try {

    const user = await userModel.findOne(
      { _id: userId },
      { name: 1, lastname: 1, date_of_birth: 1 }
    );
    if (!user) return { status: "Not possible", message: "Unable to fetch user data" }
    return { status: "Sucessful", message: "Success finding user", data: user }
  } catch (err: any) {
    return { status: "Error", message: `Error when trying to fetch user data : ${err.message}` }
  }
}

export default getUser
