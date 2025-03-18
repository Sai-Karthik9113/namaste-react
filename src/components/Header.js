import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [loginLogout, setLoginLogout] = useState("Login");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex fixed top-0 left-0 w-full justify-between items-center bg-white dark:bg-gray-900 shadow-md p-4 z-50 transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <h1 className="font-rocksalt font-black text-4xl text-orange-500">X</h1>
        <h1 className="font-montserrat font-extrabold italic text-3xl dark:text-white transition-colors duration-300">
          wippy
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex space-x-8">
          {["Home", "About Us", "Contact Us", `Cart (${cartItems.length})`].map(
            (item, index) => (
              <li
                key={index}
                className="relative text-xl font-medium cursor-pointer group"
              >
                <Link
                  to={`/${item.replace(/[^a-zA-Z]/g, "").toLowerCase()}`}
                  className="dark:text-gray-200 transition-colors duration-300"
                >
                  {item}
                </Link>
                <span className="absolute left-0 bottom-[-5] h-1 w-full bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </li>
            )
          )}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          data-testid="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-600 transition-colors duration-300"
        >
          {darkMode ? (
            <BsSun size={20} className="text-yellow-500" />
          ) : (
            <BsMoon size={20} className="text-gray-700" />
          )}
        </button>

        {/* Login - Logout Toggle button */}
        <button
          className="bg-orange-500 hover:bg-orange-600 font-medium text-white text-xl cursor-pointer w-25 h-12 rounded-md transition-all"
          onClick={() =>
            loginLogout === "Login"
              ? setLoginLogout("Logout")
              : setLoginLogout("Login")
          }
        >
          {loginLogout}
        </button>
      </div>
    </div>
  );
};

export default Header;
