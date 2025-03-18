import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl mt-20 p-8 md:p-12 transition-colors duration-300">
        <h1 className="text-4xl font-extrabold text-orange-500 text-center mb-6">
          ABOUT US 🍔🚀
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6 transition-colors duration-300">
          Welcome to{" "}
          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
            Xwippy
          </span>
          , your ultimate food delivery partner! We bring delicious food from
          your favorite restaurants straight to your doorstep—quick, fresh, and
          hassle-free.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            Who We Are❓
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            At Swippy, we believe that great food should be just a click away.
            Whether you're craving spicy street food, gourmet meals, or healthy
            salads, we’ve got you covered with a wide range of restaurants and
            cuisines to choose from.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            Our Mission 🚀
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            To revolutionize the food delivery experience by offering fast,
            reliable, and affordable services while ensuring top-notch quality
            and customer satisfaction.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            Why Choose Swippy❓
          </h2>
          <ul className="pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <li>
              ⚡ <span className="font-semibold">Lightning-fast delivery</span>
            </li>
            <li>
              🍽️ <span className="font-semibold">Thousands of restaurants</span>
            </li>
            <li>
              📱 <span className="font-semibold">Easy ordering</span>
            </li>
            <li>
              🎉{" "}
              <span className="font-semibold">Exciting deals & discounts</span>
            </li>
            <li>
              🛎️ <span className="font-semibold">24/7 support</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
            Our Vision 🌍
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            To make food ordering simpler, faster, and more enjoyable,
            connecting food lovers with their favorite meals anytime, anywhere.
          </p>
        </section>

        <p className="text-center text-lg font-medium mt-6 text-gray-900 dark:text-white transition-colors duration-300">
          🍕 Hungry?{" "}
          <Link to={"/home"}>
            <span className="text-orange-500 font-bold hover:text-orange-600">
              Order now on Xwippy
            </span>{" "}
          </Link>
          and enjoy a delicious meal at your convenience!
        </p>

        <p className="text-center mt-4 text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
          📩 Need to reach us? Visit our{" "}
          <Link
            to={"/contactus"}
            className="text-blue-500 hover:underline dark:text-blue-400 transition-colors duration-300"
          >
            Contact Us
          </Link>{" "}
          page for support, inquiries, and more!
        </p>
      </div>
    </div>
  );
};

export default About;
