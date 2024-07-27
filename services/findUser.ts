import userModel from "../models/userModel";

const findUser = async (userId: string) => {
  try {
    const user = await userModel.findOne(
      { _id: userId },
      { name: 1, lastname: 1, registration_date: 1 }
    );

    if (!user) throw "Unable to fetch user data"

    return { status: "Successful", data: user }
  } catch (err: any) {
    return { status: "Error", error: err.message }
  }
}

export default findUser
