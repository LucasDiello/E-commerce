import "../login.css"
import logo from "../img/logo.png"
import isEmail from 'validator/lib/isEmail'
import { useState } from "react"
import { useHistory } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const { push } = useHistory()

    const validationLogin = () => {
        isEmail(email) ? push('/products') : console.log('email invalido')
    }

  return (
    <section className="container-login">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src={logo} alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form>
                    <input type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="PASSWORD" />
                    <button onClick={validationLogin} className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <a href="">REGISTER</a>
                    <a href="">FORGOT PASSWORD</a>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>
  )
}

export default Login