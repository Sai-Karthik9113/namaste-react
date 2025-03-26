# Namaste React Project

## Description

This project, **Namaste React**, is a hands-on implementation based on Akshay Saini's Namaste React series. It serves as a demonstration of my practical experience with:

- **Redux Toolkit** for state management.
- **Tailwind CSS** for styling.
- **Jest** and **React Testing Library** for unit and integration testing.

In order to focus on showcasing essential skills and knowledge in modern React development, I chose not to prioritize making the project fully responsive or deploying it.

## Features

1. **State Management:**

   - Integrated Redux Toolkit to manage cart operations.
   - Actions include adding, removing, and clearing items in the cart.

2. **Routing:**

   - Implemented client-side routing using React Router DOM.
   - Dynamic routes for restaurant menus.

3. **Custom Hooks:**

   - `useOnlineStatus`: Detects and updates the app's online/offline status.
   - `useRestaurantMenu`: Fetches restaurant menu data dynamically based on restaurant ID.

4. **Styling:**

   - Used Tailwind CSS to style components and support dark mode.

5. **Testing:**
   - Unit and integration tests written with Jest and React Testing Library.
   - Scripts for running and watching tests included.

## Project Structure

```
src/
├── components/
│   ├── About.js
│   ├── Body.js
│   ├── Cart.js
│   ├── Contact.js
│   ├── Error.js
│   ├── Header.js
│   ├── RestaurantMenu.js
├── hooks/
│   ├── useOnlineStatus.js
│   ├── useRestaurantMenu.js
├── redux_store/
│   ├── appStore.js
│   ├── cartSlice.js
├── constants.js
├── index.js
```

## How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Sai-Karthik9113/namaste-react.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

4. **Run Tests:**
   ```bash
   npm test
   ```

## Known Limitations

- The website is not fully responsive.
- Deployment has not been done.
- Focus is limited to implementing Redux, Tailwind CSS, and testing.

## Future Enhancements

- Add full responsiveness.
- Deploy the application for public access.
- Improve UI/UX design and accessibility.

## Technologies Used

- **React**: Front-end library
- **Redux Toolkit**: State management
- **React Router DOM**: Routing
- **Tailwind CSS**: Styling
- **Jest** & **React Testing Library**: Testing
- **Parcel**: Bundling
