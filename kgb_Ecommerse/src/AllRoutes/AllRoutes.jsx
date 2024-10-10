import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
import Contact from "../pages/Contact";
import SingleProductPage from "../pages/SingleProductPage";
import NotFoundPage from "../component/NotFoundPage";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeWrapper from "../component/HomeWrapper";
import Register from "../pages/Register";
import ResetPasword from "../pages/ResetPasword";
import ContactUs from "../pages/ContactUs";
import IsUserExists from "../component/HOC/IsUserExists";
import IsAuth from "../component/HOC/isAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: ":productId",
            element: <SingleProductPage />,
          },
        ],
      },
      {
        path: "/cart",
        element:<IsUserExists>  <Cart /></IsUserExists>,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":blogId",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element:<IsUserExists> <Profile /></IsUserExists>,
      },
      {
        path: "/login",
        element: <IsAuth><Login /></IsAuth>,
      },
      {
        path: "/register",
        element: <IsAuth><Register /></IsAuth>,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/reset-password",
        element: <ResetPasword />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const AllRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
