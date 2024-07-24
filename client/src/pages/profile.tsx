import loadProfile from "../services/loadProfile"

function leftContainer(userName: string, registrationDate: string) {
  return (
    <article className="flex flex-col h-1/2 md:h-full items-center justify-center w-full md:w-1/2">
      <h1 className="text-2xl font-semibold">Olá {userName},tudo bem ? </h1>
      <p className="font-semibold">Você se registrou em nosso sistema em {registrationDate}</p>
    </article>
  )

}


function ProfilePage() {

  let userName: string = ""
  let registrationDate: string = "";

  const load = async () => {
    const response = await loadProfile()

    userName = response.username
    registrationDate = response.registration_date
  }
  load()

  return (
    <section className="w-full h-full flex flex-col lg:flex-row gap-y-24">
      {leftContainer(userName, registrationDate)}
      <article className="w-full h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center">
        <img src="./profile-flow.png" alt="fluxograma de home para as outras páginas" className="w-11/12 max-w-xl min-w-72" />
      </article>

    </section >
  )

}
export default ProfilePage
