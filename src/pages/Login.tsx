import { useState } from "react";
import "../login.css";
import imageLogin from "../img/Captura de tela de 2024-02-17 18-26-59.png";

function Login() {
  const [loginClicked, setLoginClicked] = useState(false);

  return (
    <main className="flex h-[100vh] flex-wrap">
      <section className="flex bg-[rgb(4,3,12)] items-center justify-center w-full lg:w-[40%]">
        <form className="border-2 lg:mr-16 border-none">
          <div>
            <h1 className="text-5xl font-bold mb-5 text-white">
              Bem-Vindo a ByteBUY
            </h1>
            {loginClicked ? (
              <p className="text-sm text-gray-400 mb-5">
                Faça login com seu e-mail e senha
              </p>
            ) : (
              <p className="text-sm text-gray-400">
                Crie sua conta ou faça o{" "}
                <button
                  className="text-orange-300 font-bold"
                  onClick={() => setLoginClicked(true)}
                >
                  Login!
                </button>
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="input !h-20"
              type="email"
              autoComplete="email"
              placeholder="Email"
            />
            {loginClicked && (
              <input
                className="input"
                type="password"
                placeholder="Password"
                autoComplete="password"
              />
            )}
          </div>
          {!loginClicked && (
            <div className="flex flex-col">
              <input
                className="input !h-20"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="input"
                type="password"
                placeholder="Repeat password"
              />
            </div>
          )}
          <div className="w-full flex justify-between">
            <div className="flex w-52 items-center space-x-2">
              <p className="text-sm text-gray-400">Remember me for 30 days</p>
              <input type="checkbox" className="!w-5 !h-10" />
            </div>
            <button className="border-none text-orange-300">
              Forgot password?
            </button>
          </div>
          <div>
            <button className="btn text-orange-300 bg-gray-900 h-16 rounded-lg w-full">
              {loginClicked ? "Login" : "Create account"}
            </button>
          </div>
          <div>
            {loginClicked ? (
              <span className="text-gray-400">Don't have an account?</span>
            ) : (
              <span className="text-gray-400">Already have an account?</span>
            )}
             {
              loginClicked && (
                <button onClick={() => setLoginClicked(false)} className="text-orange-300">sign up</button>
              )
             }
             {
              !loginClicked && (
                <button onClick={() => setLoginClicked(true)} className="text-orange-300">sign in</button>
              )
             }
          </div>
        </form>
      </section>
      <section
        style={{
          background:
            "linear-gradient(133deg, rgba(41,42,59,1) 41%, rgba(14,15,28,1) 41%, rgba(132,134,136,1) 41%, rgba(51,51,62,1) 41%, rgba(90,90,103,1) 74%, rgba(12,12,157,1) 74%, rgba(64,64,69,1) 74%)",
          backgroundColor: "rgb(41,42,59)",
        }}
        className="lg:flex w-full hidden lg:w-[60%]"
      >
        <div>
          <div className="p-32">
            <h1 className="text-5xl text-white font-bold mb-5">
              E-commerce para você!
            </h1>
            <p className="text-gray-300 text-sm">
              Veja as melhores ofertas e compre com segurança!
              <br />
              Caso tenha alguma dúvida, entre em contato conosco!
            </p>
          </div>
          <img className="img-login" src={imageLogin} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Login;
