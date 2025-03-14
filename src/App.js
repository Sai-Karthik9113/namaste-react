import React from "react";
// import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Error from "./components/Error";
// import ShimmerDish from "./components/ShimmerDish";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./redux_store/appStore";

// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Body />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: (
          <RestaurantMenu />
          // <Suspense fallback={<ShimmerDish />}>
          //   <RestaurantMenu />
          // </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
