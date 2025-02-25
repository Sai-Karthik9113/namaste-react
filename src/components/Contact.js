const Contact = () => {
  return (
    <div className="contact-container">
      <h1>📌 CONTACT US - SWIPPY 🍔📞</h1>
      <p>Have questions, feedback, or need support? Reach out to us anytime!</p>
      <div className="contact-details">
        <p>
          📩<strong>Email:</strong> support@swippy.com
        </p>
        <p>
          📍<strong>Address:</strong> 123 Swippy Street, Food City, FC 45678
        </p>
        <p>
          📱<strong>Phone:</strong> +1 234 567 890
        </p>
      </div>
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
