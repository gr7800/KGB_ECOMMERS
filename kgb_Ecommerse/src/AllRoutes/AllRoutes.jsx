import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  fetchData,
  handleCartFetch,
  handleSingleBlogFetch,
} from "../utils/helper";
import { BaseBlogUrl, BaseUrlProduct } from "../utils/constant";
import SingleBlog from "../pages/SingleBlog";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchData(`${BaseUrlProduct}?limit=4`),
      },
      {
        path: "/products",
        element: <ProductPage/>,
        loader: () => fetchData(BaseUrlProduct),
      },
      {
        path: "/cart",
        element: <Cart errorOnCurrencyChange={false}/>,
        loader: handleCartFetch,
        errorElement: <Cart errorOnCurrencyChange={true}/>,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <Blog />,
            loader: () => fetchData(BaseBlogUrl),
          },
          {
            path: ":id",
            element: <SingleBlog />,
            loader: handleSingleBlogFetch,
          },
        ],
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
