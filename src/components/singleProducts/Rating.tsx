import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {
  data?: ProductsTypo;
};

const Rating = ({ data }: Props) => {
  const [hover, setHover] = useState<number>(0);
  const [click, setClick] = useState<number>(-1);
  const handleRating = (rate: number) => {
    setClick(rate);
    console.log(rate + 1);
  };

  //   const updateRating

  return (
    <>
      <Text my="20px" fontSize="25px" fontWeight={"500"}>
        Rating
      </Text>
      <Box>
        <Flex align="center">
          <Button isDisabled={click >= 0} bgColor="#fff" _hover={{bgColor: "#fff"}}>
            {[...new Array(5)].map((el, i) => {
              return (
                <StarIcon
                
                  key={i}
                  fontSize="30px"
                  color={i <= click || hover ? "gold" : "#fcedc6"}
                  onMouseOver={() => setHover(i)}
                  onMouseOut={() => setHover(0)}
                  onClick={() => handleRating(i)}
                />
              );
            })}
          </Button>
          <Flex ml="10px" color="#fff" bgColor="green">
            <Text mr="10px">{data?.rating?.star}</Text>
            <Text>({data?.rating?.count})</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Rating;
