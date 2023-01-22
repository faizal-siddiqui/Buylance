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

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<Categories />} />
        <Route path="/men/t-shirt" element={<Products />} />
        <Route path="/men/t-shirt/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
