import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <Box>
      <Flex>
        <Box w="30%"></Box>
        <Box w="70%"></Box>
      </Flex>
    </Box>
  );
};

export default Products;
