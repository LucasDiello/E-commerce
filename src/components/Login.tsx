import React from "react";
import "../App.css";
import "../tailwind.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

function Login() {
  return (
    <>
      <header className="flex p-4 header-login h-28 items-center">
        <button className="mr-[1.5rem] mb-9">
          {<AiOutlineMenu size="30px" />}
        </button>
        <div>
          <h1 className="text-2xl text-gray-300">ByteBuy</h1>
          <p className="text-xs mb-2 ml-5">www.ByteBuy.netlify.com</p>
          <div className="flex">
            <form onSubmit={(e) => e.preventDefault()} role="search">
              <label htmlFor="search">Search for stuff</label>
              <input
                id="search"
                type="search"
                placeholder="Search..."
                autoFocus
                required
              />
              <button className="submit" type="submit">
                Go
              </button>
            </form>
            <div className=" flex items-center">
            <p className="ml-4">
              <BsCart3 size="20px" />
            </p>
            </div>
          </div>
        </div>
      </header>
      <section></section>
      <main></main>
    </>
  );
}

export default Login;
