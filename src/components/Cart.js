import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../redux_store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const totalBill = cartItems.reduce((acc, item) => {
    const price = item?.price ? item.price / 100 : item.defaultPrice / 100;
    return acc + price * item.quantity;
  }, 0);

  return !cartItems.length ? (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 dark:bg-gray-800 transition-colors duration-300">
      <img
        className="w-full max-w-96 p-8"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="Empty cart indicator"
      />
      <p className="text-2xl text-black dark:text-white font-bold transition-colors duration-300">
        Your cart is empty
      </p>
      <p className="p-2 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        You can go to home page to view more restaurants
      </p>
      <button className="uppercase bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 mt-6 cursor-pointer">
        <Link to={"/home"}>See Restaurants Near You</Link>
      </button>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen px-4 dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full max-w-2xl mt-20 p-8 md:p-12 space-y-8 bg-gray-50 dark:bg-gray-700 shadow-lg rounded-xl transition-colors duration-300">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-7/12">
              <img
                className="w-15 h-14 object-cover"
                alt="dish"
                src={`${CDN_URL}${item.imageId}`}
              />
              <p className="text-lg text-wrap font-medium dark:text-white transition-colors duration-300">
                {item.name}
              </p>
            </div>
            <div className="flex items-center justify-center w-3/12">
              <button
                className="text-lg font-black text-white bg-orange-500 hover:bg-orange-600 px-3 py-0.5 cursor-pointer"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <span className="px-3 py-0.5 text-sm font-medium bg-white dark:bg-gray-600 text-black dark:text-white transition-colors duration-300">
                {item.quantity}
              </span>
              <button
                className="text-lg font-black text-white bg-orange-500 hover:bg-orange-600 px-3 py-0.5 cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
            <div className="text-center w-1/12 dark:text-white transition-colors duration-300">
              <p>
                ₹
                {item?.price
                  ? (item.price / 100) * item.quantity
                  : (item.defaultPrice / 100) * item.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="flex flex-col space-y-2 border-t border-dotted pt-5 dark:border-gray-500 transition-colors duration-300">
          <span className="font-bold text-lg dark:text-white transition-colors duration-300">
            Bill Details
          </span>
          <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium text-sm transition-colors duration-300">
            <span>Item Total</span>
            <span>₹{totalBill.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium text-sm transition-colors duration-300">
            <span>Platform fee</span>
            <span>
              <span className="line-through text-gray-400">₹10.00</span> 6
            </span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium text-sm pb-8 border-b transition-colors duration-300">
            <span>GST and Restaurant Charges</span>
            <span>₹34.83</span>
          </div>
          <div className="flex justify-between font-bold dark:text-white transition-colors duration-300">
            <span className="uppercase">To Pay</span>
            <span className=" tracking-wide">
              ₹{(totalBill + 6 + 34.83).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
