import axios from "axios";
import { userRegisterI } from "../types/userTypes";

async function registerUser(data: userRegisterI) {
  try {
    const apiURL: string = import.meta.env.VITE_API_URL
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
    };

    // The api requests a user registration date 
    const dateOfRegister = new Date()

    const reqData = {
      ...data,
      registration_date: dateOfRegister.toDateString()

    }
    console.log(reqData)
    const postResponse = await axios.post(
      apiURL,
      reqData,
      { headers }
    )

    const responseData = postResponse.data
    return responseData
  } catch (err: any) {
    console.log(err.response.data)
    return { status: "Error", message: err.response.data.message }
  }
}
export default registerUser

