function leftContainer() {
  return (
    <article className="w-full flex items-center  justify-center">
      <main className="sm:shadow-xl sm:h-auto sm:rounded-xl w-full sm:w-9/12 h-5/6 flex justify-center flex-col items-center gap-y-10 py-8 lg:rounded-l-lg">
        <h1 className="font-semibold text-4xl">Cadastre-se</h1>
        <div className="flex flex-col w-full justify-center  px-[10%]">

          <label>Nome</label>
          <input
            type="text"
            placeholder="João, Maria, Carlos, ..."
            className="inputs"
          />
          <label>Sobrenome</label>
          <input
            type="text"
            placeholder="Silva, Oliveira, Santos, ..."
            className="inputs"
          />
          <label>Data de nascimento</label>
          <input
            type="date"
            placeholder="Data de nascimento"
            className="inputs"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="exemplo@gmail.com"
            className="inputs"
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="exemplo: 2jdljvo/33"
            className="inputs"
          />
          <div className="text-center">
            <p>Já tem uma conta ?</p>
            <a href="/login" className="cursor-pointer hover:text-lg text-violet-700 transition-all">Login</a>
          </div>

          <button className="btns self-center mt-6">
            Cadastre-se
          </button>

        </div>
      </main>
    </article>
  );
}

function rightContainer() {

  return (
    <article className="w-full h-auto lg:h-full flex justify-center items-center">
      <img src="./register-flow.png" alt="fluxograma de home para as outras páginas" className="w-full max-w-2xl min-w-72 " />
    </article>
  )
}
function RegisterPage() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row mt-20 lg:m-0 gap-y-24">
      {leftContainer()}
      {rightContainer()}
    </section>
  )
}

export default RegisterPage

