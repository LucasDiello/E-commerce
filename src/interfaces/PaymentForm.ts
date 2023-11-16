import { ChangeEvent } from "react";

export default interface PaymentFormProps {
    cardNumber: string;
    cardExpiration: string;
    cardCVC: string;
    onCardNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCardExpirationChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCardCVCChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
  }