import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";
import AllPrice from "./AllPrice";
import ProductsCarausel from "./ProductsCarausel";

type Props = {
  prod: ProductsTypo;
};

const ProductsCard = ({ prod }: Props) => {
  return (
    <Box cursor="pointer">
      <Box>
        <ProductsCarausel prod={prod} />
      </Box>
      <Box p="5px">
        <Text
          w="fit-content"
          fontWeight="500"
          fontSize={{ lg: "16px", md: "14px", sm: "13px" }}
          noOfLines={[1, 1, 1]}
        >
          {prod.name}
        </Text>
        <AllPrice prod={prod} />
      </Box>
    </Box>
  );
};

export default ProductsCard;
