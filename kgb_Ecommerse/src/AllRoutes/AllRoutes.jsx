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
            path: ":id",
            element: <SingleProductPage />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":id",
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
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
