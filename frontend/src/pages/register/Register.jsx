import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Password don't match!");
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try{
         await axios.post("./auth/register", user).then(data => {return data});
          history.push("/login")

      }catch(err){
        console.log(err)

      }

    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Jaysocial</h3>
          <span className="loginDesc">
            Social media is providing a way to establish your own community😊
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onClick={handleClick}>
            <input placeholder="Username" ref={username} className="loginInput" />
            <input placeholder="Email" ref={email} className="loginInput" type="email"/>
            <input placeholder="Password" ref={password} className="loginInput" type="password" minLength="6"/>
            <input placeholder="Password Again" ref={passwordAgain} className="loginInput" type="password" minLength="6"/>
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
