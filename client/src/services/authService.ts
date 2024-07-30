import axios from "axios";
import { userAuthI } from "../types/userTypes";

interface promiseResponseI {
  statusMessage: string
  message: string
  token?: string
}

async function authService(data: userAuthI): Promise<promiseResponseI> {
  try {
    const apiURL = import.meta.env.VITE_API_URL
    const path = "auth"
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY}`,
    };

    const postResponse = await axios.post(`${apiURL}${path}`, data, { headers })

    const responseData = postResponse.data
    return responseData
  } catch (err: any) {
    console.log(err.response.data)
    return { statusMessage: "Error", message: err.response.data.message }
  }
}
export default authService
