import "../Cart.css";
import Item from "../interfaces/Item";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentForm from "./PaymentForm";
import CartItem from "./CartItem";

function Cart({ itemsCart }: { itemsCart: Item[] }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formated = event.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    if (event.target.value.length <= 19) return setCardNumber(formated);
  };

  const handleCardExpirationChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 7)
      return setCardExpiration(event.target.value);
  };

  const handleCardCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 3) return setCardCVC(event.target.value);
  };

  const handleSubmit = () => {
    if (!itemsCart.length) return toast.error("Porfavor, adicione itens ao carrinho");
    cardNumber.length < 19 || cardExpiration.length < 7 || cardCVC.length < 3
      ? toast.error("Porfavor, preencha todos requisitos")
      : toast.success("Parabéns pela compra!");
  };

  return (
    <div className="checkout">
        <CartItem items={itemsCart} />
      <h2>Pagamento</h2>
        <PaymentForm
          cardNumber={cardNumber}
          cardExpiration={cardExpiration}
          cardCVC={cardCVC}
          onCardNumberChange={handleCardNumberChange}
          onCardExpirationChange={handleCardExpirationChange}
          onCardCVCChange={handleCardCVCChange}
          onSubmit={handleSubmit}
        />
      </div>
  );
}

export default Cart;
