import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import AdminProductsCompo from "../../../components/AdminProducts/AdminProductsCompo";
import { useAppSelector } from "../../../redux/store";
import AdminCard from "./AdminCard";

const AdminProducts = () => {
  const { products } = useAppSelector((store) => store.productManager);
  return (
    <>
      <Box>
        <AdminProductsCompo />
      </Box>
    </>
  );
};

export default AdminProducts;
