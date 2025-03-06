import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginLogout, setLoginLogout] = useState("Login");

  return (
    <div className="flex fixed justify-between items-center bg-white top-0 z-50 w-full shadow-xl">
      <div className="flex items-center w-20">
        <img className="logo" src={require("../../assets/logo.jpg")} />
        <h1 className="font-rocksalt font-black text-6xl text-orange-500 tracking-wider">
          X
        </h1>
        <h1 className="font-montserrat font-extrabold italic text-5xl">
          wippy
        </h1>
      </div>
      <div className="nav-items flex items-center p-2">
        <ul className="flex space-x-5">
          <li className="relative text-2xl font-medium cursor-pointer mx-5 my-auto py-5 group">
            <Link to={"/"}>Home</Link>
            <span className="absolute left-0 bottom-[10px] h-1 w-full bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative text-2xl font-medium cursor-pointer mx-5 my-auto py-5 group">
            <Link to={"/about"}>About Us</Link>
            <span className="absolute left-0 bottom-[10px] h-1 w-full bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative text-2xl font-medium cursor-pointer mx-5 my-auto py-5 group">
            <Link to={"/contactus"}>Contact Us</Link>
            <span className="absolute left-0 bottom-[10px] h-1 w-full bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li className="relative text-2xl font-medium cursor-pointer mx-5 my-auto py-5 group">
            Cart
            <span className="absolute left-0 bottom-[10px] h-1 w-full bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li className="text-2xl font-medium cursor-pointer mx-5 my-auto py-5">
            <button
              className="login-btn cursor-pointer w-25 h-12.5 bg-orange-500 text-white rounded-md"
              onClick={() =>
                loginLogout === "Login"
                  ? setLoginLogout("Logout")
                  : setLoginLogout("Login")
              }
            >
              {loginLogout}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
