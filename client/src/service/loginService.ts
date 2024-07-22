import axios from "axios";
import { userLoginI } from "../types/userTypes";

interface LoginSvcI {
  status: string
  message: string
  tk?: string
}

async function LoginSvc(props: userLoginI): Promise<LoginSvcI> {
  try {
    const apiURL = import.meta.env.VITE_API_URL
    const path = "login"

    const userCredentials: userLoginI = props
    const headers = {
      Authentication: "Basic 8452ec51c3661c3f428e2ce0ccad52ae5ecb4689"
    }

    const postResponse: LoginSvcI = await axios.post(
      `${apiURL}${path}`,
      userCredentials,
      {
        headers: headers
      }
    )
    // Teste de reposta (temporario)
    console.log(postResponse)
    return postResponse
  } catch (err: any) {
    return { status: "Erro", message: err.message }
  }
}
export default LoginSvc
