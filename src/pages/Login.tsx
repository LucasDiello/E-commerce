import "../login.css";
import logo from "../img/logo.png";
import isEmail from 'validator/lib/isEmail';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Toastfy from "../components/Toastfy";

function Login() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); 
  const { push } = useHistory();

  const validationLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if(isEmail(email)) {
      push('/products');
    }

    return toast.error("Email inválido");

  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if(newEmail.length > 10) {
      setIsEmailValid(false);
    }
  }

  return (
    <section className="container-login">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <img src={logo} alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form>
            <input
              type="email"
              placeholder="EMAIL"
              onChange={handleEmailChange}
            />
            <input type="password" placeholder="PASSWORD" />
            <button
              onClick={validationLogin}
              className={`opacity ${isEmailValid ? 'disabled' : 'bg-green-300'}`}
              disabled={isEmailValid} 
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container bg-blue-600"></div>
      <Toastfy />
    </section>
  );
}

export default Login;
