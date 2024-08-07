import { useState } from "react"
import getUserData from "../services/getUserData"

function ProfilePage() {

  const [userName, setuserName] = useState<string>("")
  const [registrationDate, setregistrationDate] = useState<string>("")

  const load = async () => {
    const basePath = "/user-management-system"
    const token = localStorage.getItem("jwtTK")
    if (!token) {
      alert("You are not authenticated, please login")
      window.location.href = `${basePath}/login`
    }
    else {
      const response = await getUserData()

      if (response.message === "Successful") {
        setuserName(response.data.name)

        const date = new Date(response.data.registration_date as string)
        const datearray = date.toUTCString().slice(0, 16)
        setregistrationDate(datearray)
      }
      else {
        alert(response.message)
        window.location.href = `${basePath}/login`
      }
    }
  }
  load()

  return (
    <section className="w-full h-full flex flex-col lg:flex-row gap-y-24">
      <article className="flex flex-col h-1/2 lg:h-full items-center justify-center lg:w-1/2 ">
        <h1 className="text-2xl font-semibold">Hi {userName},all good ? ? </h1>
        <p className="font-semibold">You registered in our system at {registrationDate}</p>
      </article>
      <article className="w-full h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center">
        <img src="./profile-flow.png" alt="fluxograma de home para as outras páginas" className="w-11/12 max-w-xl min-w-72" />
      </article>

    </section >
  )

}
export default ProfilePage
