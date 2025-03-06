const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl mt-20 p-8 md:p-12 transition-colors duration-300">
        <h1 className="text-4xl font-extrabold text-orange-500 text-center mb-6">
          CONTACT US 🍔📞
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10 transition-colors duration-300">
          Have questions, feedback, or need support? Reach out to us anytime!
        </p>

        <div className="mb-10 text-lg text-gray-700 dark:text-gray-300 space-y-4 transition-colors duration-300">
          <p>
            📩<strong>Email:</strong>{" "}
            <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
              support@swippy.com
            </span>
          </p>
          <p>
            📍<strong>Address:</strong>{" "}
            <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
              123 Swippy Street, Food City, FC 45678
            </span>
          </p>
          <p>
            📱<strong>Phone:</strong>{" "}
            <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
              +1 234 567 890
            </span>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Send Us a Message
        </h2>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus-outline-none transition-colors duration-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus-outline-none transition-colors duration-300"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus-outline-none transition-colors duration-300"
            required
          ></textarea>
          <button
            className="bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
