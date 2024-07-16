import HeaderComponent from "../components/header"

function btns() {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="btn-home-stl" onClick={() => {
        window.location.href = "/login"
      }}> Login</button>
      <button className="btn-home-stl" onClick={() => {
        window.location.href = "/register"
      }}> Cadastre-se</button>
    </div>
  )
}

function leftArticle() {
  return (
    <article className="w-full h-1/2 md:h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Olá, tudo bem ?</h2>
          <p className="text-center">Cadastre-se ou faça login para usar nossos serviços</p>
        </div>
        {btns()}
      </div>
    </article>

  )
}

function HomePage() {
  return (
    <section className="w-full h-5/6 flex flex-col md:flex-row items-center justify-around p-4">

      {leftArticle()}
      <article className="w-full h-1/2 md:h-full flex justify-center items-center">
        <img src="./home-flow.png" alt="fluxograma de home para as outras páginas" className="w-11/12 max-w-xl min-w-72" />
      </article>
    </section>
  )
}

export default HomePage
