import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../redux/store";
import SidebarWithHeader from "../Admin/sidebar";
import AdminProductsTable from "./AdminProductsTable";

type Props = {};

const AdminProductscompo = (props: Props) => {
  const { products } = useAppSelector((store) => store.productManager);
  console.log("products:", products);

  return (
    <Box>
      <SidebarWithHeader
        children={<AdminProductsTable products={products} />}
      />
    </Box>
  );
};

export default AdminProductscompo;
