import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {
  prod: ProductsTypo;
};

const AllPrice = ({ prod }: Props) => {
  return (
    <>
      <Flex
        pl={{ lg: "30px", md: "10px", sm: "5px" }}
        fontSize={{ lg: "14px", md: "13px", sm: "12px" }}
        align={"center"}
      >
        <Text fontWeight="bold" mr="10px">
          ₹ {prod.price}
        </Text>
        <Text mr="10px">
          <s>₹ {prod.mrp}</s>
        </Text>
        <Text fontWeight="bold" color="red" mr="10px">
          ({prod.discount}% Off)
        </Text>
      </Flex>
    </>
  );
};

export default AllPrice;
