import { useState } from "react";
import authService from "../services/authService";
import { userAuthI } from "../types/userTypes";


function leftContainer() {

  const basePath = "/user-management-system"
  const [message, setMessage] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const loginAction = async ({ email, password }: userAuthI) => {
    const response = await authService({ email, password })

    if (response?.statusMessage === "Authenticated") {
      localStorage.setItem("jwtTK", response?.token as string)
      window.location.href = `${basePath}/profile`
    }
    else if (response?.statusMessage === "Error") {
      setMessage(response?.message)
    }
  }

  return (
    <article className="w-full flex items-center  justify-center">
      <main className="sm:shadow-xl sm:h-auto sm:rounded-xl w-full sm:w-9/12 h-5/6 flex justify-center flex-col items-center gap-y-10 py-28 lg:rounded-l-lg">
        <h1 className="font-semibold text-4xl">Login</h1>
        <div className="flex flex-col w-full items-center justify-center gap-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 w-4/5 bg-gray-100 rounded-md outline-0"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 w-4/5 bg-gray-100 rounded-md outline-0"
          />
          <div className="text-center">
            <p>Don't have an account? </p>
            <a href="register" className="cursor-pointer hover:text-lg text-violet-700 transition-all">Register</a>
          </div>

          <span className="text-center text-red-500 text-sm font-semibold">{message}</span>
          <button className="btns" onClick={() => { loginAction({ email, password }) }}>
            Login
          </button>

        </div>
      </main>
    </article>
  );
}

function rightContainer() {

  return (
    <article className="w-full h-auto lg:h-full flex justify-center items-center">
      <img src="./login-flow.png" alt="fluxograma de home para as outras páginas" className="w-full max-w-2xl min-w-72" />
    </article>
  )
}
function LoginPage() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row mt-20 lg:m-0 gap-y-24">
      {leftContainer()}
      {rightContainer()}
    </section>
  )
}

export default LoginPage
