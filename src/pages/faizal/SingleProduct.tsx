import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import { useApi } from "../../components/Hooks/useApi";
import { useSingleProductApi } from "../../components/Hooks/useSingleProductApi";
import ImagesCompo from "../../components/singleProducts/ImagesCompo";
import ProductDetails from "../../components/singleProducts/ProductDetails";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {};

const SingleProduct = (props: Props) => {
  // const [product, setProduct] = useState<ProductsTypo | {}>({});
  const { id } = useParams();
  const [loading, error, data, apifn] = useSingleProductApi();
  useEffect(() => {
    apifn({
      method: "get",
      url: `http://localhost:8080/products/${id}`,
    });
  }, []);

  return (
    <Box mx={{ lg: "2%", md: "3%", sm: "4%" }}>
      <Box></Box>
      <Flex flexDir={{ lg: "row", md: "row", sm: "column" }}>
        <Box w={{ lg: "50%", md: "50%", sm: "100%" }}>
          <ImagesCompo data={data} />
        </Box>
        <Box w={{ lg: "50%", md: "50%", sm: "100%" }}>
          <ProductDetails data={data} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
