import {
  Box,
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";
import ProductsModal from "./ProductsModal";
import styles from "./styles/ProductsTable.module.css";

type Props = {
  products: ProductsTypo[];
};

const AdminProductsTable = ({ products }: Props) => {
  return (
    <Box>
        <ProductsModal header={"P"} products={products[0]}>Product Details</ProductsModal>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((prod) => {
            return (
              <tr key={prod.id}>
                <td data-label="Image">
                  <Image w="30px" src={prod.images[0]} />
                </td>
                <td data-label="Name">{prod.name}</td>
                <td data-label="Price">₹ {prod.price}</td>
                <td data-label="More Details">
                  <Button>More..</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </Box>
  );
};

export default AdminProductsTable;
