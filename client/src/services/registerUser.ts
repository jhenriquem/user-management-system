import axios from "axios";
import { userRegisterI } from "../types/userTypes";

async function registerUser(data: userRegisterI) {
  try {
    const apiURL = import.meta.env.VITE_API_URL
    const path = "/register"
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
    };

    // The api requests a user registration date 
    const dateOfRegister = new Date()


    const postResponse = await axios.post(
      `${apiURL}${path}`,
      { ...data, registration_date: dateOfRegister.toUTCString() },
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

