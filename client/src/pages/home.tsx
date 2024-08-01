function btns() {
  const basePath = "/user-management-system"
  return (

    <div className="flex flex-wrap gap-4">
      <button className="btns" onClick={() => {
        window.location.href = `${basePath}/login`
      }}> Login</button>
      <button className="btns" onClick={() => {
        window.location.href = `${basePath}/register`
      }}> Register</button>
    </div>
  )
}

function leftContainer() {
  return (
    <article className="w-full h-1/2 md:h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center md:items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-start">Hi! how are you ?</h2>
          <p className="text-center">Register or log in to use our services</p>
        </div>
        {btns()}
      </div>
    </article>

  )
}

function HomePage() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-around p-4">

      {leftContainer()}
      <article className="w-full h-auto md:h-full flex justify-center items-center">
        <img src="./home-flow.png" alt="fluxograma de home para as outras páginas" className="w-11/12 max-w-xl min-w-72" />
      </article>
    </section>
  )
}

export default HomePage
