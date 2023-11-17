import Modal from "react-modal";
Modal.setAppElement(document.body);
import { useState } from "react";
import "../App.css";
import "../tailwind.css";
import {
  AiOutlineMenu,
  AiFillCloseCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import Menu from "./Menu";
import { getSearchItem } from "../services/fetch";
import { useItemsContext } from "../context/ItemsContext";
import logoIMG from "../img/logo.png";
import Cart from "./Cart";
import CartLowScreen from "./CartLowScreen";


function Login() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setItems, cart } = useItemsContext();
  const isMobile = window.innerWidth <= 600;

  const handClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = async () => {
    const searchItem = await getSearchItem(searchValue);
    setItems(searchItem.data.results);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: `${isMobile ? "10%" : "4%"}`,
      height: "87%",
      width: `${isMobile ? "100%" : "50%"}`,
      left: `${isMobile ? "0%" : "56.7%"}`,
      borderRadius: "10px",
      border: "none",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };

  return (
    <>
      <header className="flex p-8 xs:p-3 header-login h-28 items-center">
        <button onClick={handClick} className="mr-[1.5rem] mb-9">
          {menuOpen ? (
            <AiFillCloseCircle className="close-icon" size="40" />
            ) : (
              <AiOutlineMenu size="30" />
              )}
        </button>
        {menuOpen && <Menu />}
        <div className="md:flex md:items-center md:w-[100%] md:justify-between ">
          <div>
            <h1 className="text-2xl text-gray-300 font-header">ByteBuy</h1>
            <p className="text-xs mb-2 ml-5 font-header text-[rgb(192,190,190)]">www.ByteBuy.netlify.com</p>
          </div>
          <div className="flex">
            <form
              className="form-search md:w-[1000px]"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <input
                id="search"
                type="search"
                placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="md:w-[1000px]"
                />
              <button className="submit" onClick={handleSearch} type="submit">
                Go
              </button>
            </form>
              <button onClick={openModal} className="h-7 ml-4">
                <BsCart3 size="20px" className="md:w-0 text-gray-300" />
              </button>
          </div>
          <div className="md:w-[250px] flex xs:hidden md:block">
            <button className="flex items-center" onClick={openModal}>
              <h2 className="mr-2 text-gray-300 font-header ">Open Cart</h2>
              <span>
                {" "}
                <AiOutlineArrowRight size="20px" className="text-gray-300" />
              </span>
              <img className="md:w-[100px]" src={logoIMG} />
            </button>
          </div>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {!isMobile ? (
          <Cart itemsCart={cart} />
          ) : (
          <>
            <CartLowScreen itemsCart={cart} />
            <button
              className="absolute md:right-36 md:top-[62px] xs:top-0 flex items-center"
              onClick={closeModal}
            >
              <MdClose className="md:text-[#6d819c] md:text-[35px] xs:text-[25px]" /> <p className="text-black p-2 text-minscreen text-lg font-bold">Carrinho de compras</p>
            </button>
          </>
        )}
      </Modal>
    </>
  );
}

export default Login;
