import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import ShimmerDish from "./components/ShimmerDish";
// import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<ShimmerDish />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
