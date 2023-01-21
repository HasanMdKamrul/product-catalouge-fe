import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddProduct from "../Pages/AddProduct";
import AllProducts from "../Pages/AllProducts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProducts from "../Pages/MyProducts";
import ProductDetail from "../Pages/ProductDetail";
import ProductUpdate from "../Pages/ProductUpdate";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/allproducts/:id",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
        loader: ({ params: { id } }) =>
          fetch(`${process.env.REACT_APP_API_END_POINT}api/products/${id}/`, {
            headers: {
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
          }),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoute>
            <ProductUpdate />
          </PrivateRoute>
        ),
        loader: ({ params: { id } }) =>
          fetch(`${process.env.REACT_APP_API_END_POINT}api/products/${id}`, {
            headers: {
              Authorization: `Token ${localStorage.getItem("auth_token")}`,
            },
          }),
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myproducts",
        element: (
          <PrivateRoute>
            {" "}
            <MyProducts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
