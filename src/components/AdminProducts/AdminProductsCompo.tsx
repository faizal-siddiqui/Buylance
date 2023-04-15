import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/ProductAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import SidebarWithHeader from "../Admin/sidebar";
import AdminProductsTable from "./AdminProductsTable";

type Props = {};

const AdminProductsCompo = (props: Props) => {
  const { products } = useAppSelector((store) => store.productManager);
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      <SidebarWithHeader
        children={<AdminProductsTable products={products} />}
      />
    </Box>
  );
};

export default AdminProductsCompo;
