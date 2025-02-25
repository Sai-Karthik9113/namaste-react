import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-container">
      <h1>ABOUT US – SWIPPY 🍔🚀</h1>
      <p>
        Welcome to Swippy, your ultimate food delivery partner! We bring
        delicious food from your favorite restaurants straight to your
        doorstep—quick, fresh, and hassle-free.
      </p>

      <h2>Who We Are</h2>
      <p>
        At Swippy, we believe that great food should be just a click away.
        Whether you're craving spicy street food, gourmet meals, or healthy
        salads, we’ve got you covered with a wide range of restaurants and
        cuisines to choose from.
      </p>

      <h2>Our Mission 🚀</h2>
      <p>
        To revolutionize the food delivery experience by offering fast,
        reliable, and affordable services while ensuring top-notch quality and
        customer satisfaction.
      </p>

      <h2>Why Choose Swippy?</h2>
      <ul className="features-list">
        <li>Lightning-fast delivery</li>
        <li>Thousands of restaurants</li>
        <li>Easy ordering</li>
        <li>Exciting deals & discounts</li>
        <li>24/7 support</li>
      </ul>

      <h2>Our Vision 🌍</h2>
      <p>
        To make food ordering simpler, faster, and more enjoyable, connecting
        food lovers with their favorite meals anytime, anywhere.
      </p>
      <br />
      <p className="order-now">
        Hungry? Order now on Swippy and enjoy a delicious meal at your
        convenience!
      </p>
      <p className="reach-us">
        📩 Need to reach us? Visit our <Link to={"/contactus"}>Contact Us</Link>{" "}
        page for support, inquiries, and more!
      </p>
    </div>
  );
};

export default About;
