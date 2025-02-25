import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../../assets/logo.jpg")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              loginLogout === "Login"
                ? setLoginLogout("Logout")
                : setLoginLogout("Login")
            }
          >
            {loginLogout}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
