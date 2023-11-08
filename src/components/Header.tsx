import React, { useState } from "react";
import "../App.css";
import "../tailwind.css";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Menu from "./Menu";
import { getSearchItem } from "../services/fetch";
import { useItemsContext } from "../context/ItemsContext";

function Login() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { setItems } = useItemsContext();

  const handClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleSearch = async () => {
    const searchItem = await getSearchItem(searchValue);
    setItems(searchItem.data.results);
  }


  return (
    <>
      <header className="flex p-4 header-login h-28 items-center">
        <button onClick={handClick} className="mr-[1.5rem] mb-9">
        {menuOpen ? <AiFillCloseCircle className="close-icon" size="40" /> : <AiOutlineMenu size="30" /> }
        {menuOpen && <Menu/>}
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
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                required
              />
              <button onClick={handleSearch} className="submit" type="submit">
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
