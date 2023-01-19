import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "../../pages/rishu/Address";
import Admin from "../../pages/Karmit/Admin";
import AdminProducts from "../../pages/Avinash/AdminProducts";
import Cart from "../../pages/Avinash/Cart";
import Categories from "../../pages/Sama/Categories";
import Home from "../../pages/Home";
import Orders from "../../pages/Karmit/Orders";
import Payment from "../../pages/rishu/Payment";
import Products from "../../pages/faizal/Products";
import SingleProduct from "../../pages/faizal/SingleProduct";
import Login from "../../pages/Sama/Login";
import Signup from "../../pages/Sama/Signup";
import AuthRoute from "./AuthRoute";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<Categories />} />
        <Route
          path="/men/t-shirt"
          element={
            <AuthRoute>
              <Products />
            </AuthRoute>
          }
        />
        <Route path="/men/t-shirt/:id" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <AuthRoute>
              <Cart />
            </AuthRoute>
          }
        />
        <Route
          path="/address"
          element={
            <AuthRoute>
              <Address />
            </AuthRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <AuthRoute>
              <Payment />
            </AuthRoute>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
