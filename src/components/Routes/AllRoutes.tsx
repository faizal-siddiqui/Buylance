import React from "react";
import { Route, Routes } from "react-router-dom";
import Address from "../../pages/rishu/address/Address";

import AdminProducts from "../../pages/Avinash/Admin/AdminProducts";
import Cart from "../../pages/Avinash/Cart/Cart";
import Admin from "../../pages/faizal/Admin";

import Categories from "../../pages/Sama/Categories";
import Home from "../../pages/Karmit/Home";
import Orders from "../../pages/Karmit/Orders";
import Payment from "../../pages/Avinash/Payment/Payment";
import Products from "../../pages/faizal/Products";
import SingleProduct from "../../pages/faizal/SingleProduct";
import Login from "../../pages/Sama/Login";
import Signup from "../../pages/Sama/Signup";
import AdminUsers from "../../pages/faizal/AdminUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import NotFound from "../../pages/faizal/NotFound";

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
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/men/t-shirt/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
