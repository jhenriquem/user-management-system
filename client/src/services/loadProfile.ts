import axios from "axios"
async function loadProfile() {
  try {

    const token = localStorage.getItem("jwtTK")
    const apiURL = import.meta.env.VITE_API_URL
    const headers = {
      Authorization: `Basic ${import.meta.env.VITE_API_KEY} ${token}`,
    };

    const path = "/profile"

    if (!token) {
      alert("Você não tem autorização para entra nessa página")
      window.location.href = "/"
    }
    else {
      const response = await axios.get(`${apiURL}${path}`, { headers })
      return response.data.data
    }
  }
  catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export default loadProfile
