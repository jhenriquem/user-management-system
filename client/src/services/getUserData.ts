import axios from "axios"
async function getUserData() {
  try {
    const token = localStorage.getItem("jwtTK")
    const apiURL = import.meta.env.VITE_API_URL
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY} ${token}`,
    };

    const response = await axios.get(apiURL, { headers })

    return { message: "Successful", data: response.data.data }
  }
  catch (err: any) {
    console.log(err.message)
    return { message: err.message }
  }
}

export default getUserData
