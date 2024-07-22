import axios from "axios";
import { userLoginI } from "../types/userTypes";

interface promiseResponseI {
  status: string
  message: string
  tk?: string
}

async function loginService(data: userLoginI): Promise<promiseResponseI> {
  try {
    const apiURL = import.meta.env.VITE_API_URL
    const path = "/login"
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
    };

    const postResponse = await axios.post(`${apiURL}${path}`, data, { headers })

    const responseData = postResponse.data
    return responseData
  } catch (err: any) {
    console.log(err.response.data)
    return { status: "Error", message: err.response.data.message }
  }
}
export default loginService
