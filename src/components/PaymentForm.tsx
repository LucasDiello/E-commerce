import numCart from "../img/numCart.svg";
import dateCard from "../img/dateCard.svg";
import seguranceCard from "../img/seguranceCard.svg";
import Toastfy from "./Toastfy";
import PaymentFormProps from "../interfaces/PaymentForm";
import logoVisa from "../img/logoVisa.svg";


function PaymentForm({
  cardNumber,
  cardExpiration,
  cardCVC,
  onCardNumberChange,
  onCardExpirationChange,
  onCardCVCChange,
  onSubmit,
} : PaymentFormProps
) {
  return (
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
          <h6 id="label-cardexpiration">{cardExpiration || "00 / 0000"}</h6>
          <h6 id="label-cardcvc" className="">
            {cardCVC || "000"}
          </h6>
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
              onChange={onCardNumberChange}
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
              onChange={onCardExpirationChange}
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
              onChange={onCardCVCChange}
            />
          </p>
          <button
            onClick={onSubmit}
            className="button-cta"
            title="Confirm your purchase"
          >
            <span>PAGAR</span>
          </button>
      <button onClick={onSubmit} className="button-cta" title="Confirm your purchase">
        <span>PAGAR</span>
      </button>
      <Toastfy />
    </div>
  </div>
  );
}

export default PaymentForm;
