import { useState } from "react";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../../assets/logo.jpg")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
