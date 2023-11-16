import "../Cart.css";
import logoVisa from "../img/logoVisa.svg";
import numCart from "../img/numCart.svg";
import dateCard from "../img/dateCard.svg";
import seguranceCard from "../img/seguranceCard.svg";
import Item from "../interfaces/Item";
import { useItemsContext } from "../context/ItemsContext";
import { ChangeEvent, useState } from "react";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({ itemsCart }: { itemsCart: Item[] }) {
  const { setCart } = useItemsContext();
  const [deleteItem, setDeleteItem] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const handleDelete = (id: string) => {
    const newCart = itemsCart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 19) {
      const formated = event.target.value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setCardNumber(formated);
    }
  };

  const handleCardExpirationChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 7) {
      setCardExpiration(event.target.value);
    }
  };

  const handleCardCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 3) {
      setCardCVC(event.target.value);
    }
  };

  const handleSubmit = () => {
    if(!itemsCart.length) return toast.error("Porfavor, adicione itens ao carrinho");
    
    (cardNumber.length < 19 || cardExpiration.length < 7 || cardCVC.length < 3) ?  toast.error("Porfavor, preencha todos requisitos") : toast.success("Parabéns pela compra!");
    
  }

  const totalValue = itemsCart.reduce((acc, item) => acc + item.price, 9.50);


  return (
    <div className="checkout">
      <div className="order">
        <h2>Items</h2>
        <h5>Order #0101</h5>
        <ul className="order-list">
          {itemsCart.map((item) => {
            return (
              <li
                key={item.id}
                onMouseEnter={() => setDeleteItem(true)}
                onMouseLeave={() => setDeleteItem(false)}
              >
                <img
                  src={item.thumbnail}
                  className={`${deleteItem && "opacity-50"}`}
                />
                <h4>{item.title.substring(0, 15)}</h4>
                <h5>{item.price}</h5>
                {deleteItem && (
                  <button
                    className="delete relative left-20 top-[-40px]"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdClose size="20px" color="black" />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <h5>Taxa</h5>
        <h4>$ 9.50</h4>
        <h5 className="total">Total</h5>
        {
          <h4 className="total-price">
            $ {itemsCart.length ? totalValue.toFixed(2) : "0"}
          </h4>
        }
      </div>
      <h2>Pagamento</h2>
      <div id="payment" className="payment">
        <div className="card">
          <div className="card-content">
            <img src={logoVisa} alt="" />
            <h5>Card Number</h5>
            <h6 id="label-cardnumber">{cardNumber || "0000 0000 0000 0000"}</h6>
            <h5>
              Expiration<span>CVC</span>
            </h5>
            <div className="flex w-[67%] justify-between">
            <h6 id="label-cardexpiration">
             {cardExpiration || "00 / 0000"}
            </h6>
            <h6 id="label-cardcvc" className="">{cardCVC || "000"}</h6>
            </div>
          </div>
          <div className="wave"></div>
        </div>
        <div className="card-form">
          <p className="field">
            <img src={numCart} alt="" />
            <input
              type="text"
              id="cardnumber"
              name="cardnumber"
              maxLength={16}
              placeholder="1234 5678 9123 4567"
              onChange={handleCardNumberChange}
            />
          </p>
          <p className="field space">
            <img src={dateCard} alt="" />
            <input
              type="text"
              id="cardexpiration"
              maxLength={7}
              name="cardexpiration"
              placeholder="MM / YYYY"
              onChange={handleCardExpirationChange}
            />
          </p>
          <p className="field">
            <img src={seguranceCard} alt="" />
            <input
              type="text"
              id="cardcvc"
              name="cardcvc"
              maxLength={3}
              placeholder="123"
              onChange={handleCardCVCChange}
            />
          </p>
          <button onClick={handleSubmit} className="button-cta" title="Confirm your purchase">
            <span>PAGAR</span>
          </button>
            <ToastContainer
            position="top-left"
             autoClose={2000}
             hideProgressBar={true}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="light"
            />
        </div>
      </div>
    </div>
  );
}

export default Cart;
