import React from 'react'
import { Box, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import shoppingBag from "../image/shopping-bag.png";
 
const EmptyCart = () => {
  return (
    <Box m={"auto"} p={50} w={"60%"} mt={"50px"} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <Center>
          <Stack>
          <Image
          m={"auto"}
          src={shoppingBag}
          w={{ base: "100px", md: "150px", lg: "250px" }}
          h={{ base: "100px", md: "150px", lg: "250px" }}
        />
        <Text mt={10} fontWeight={"bold"} color={"gray.500"}>
          Looks like you have no items in your shopping cart
        </Text>
        <Link to="/">
        <Button mt={10} bg={"pink.600"}>
          Return to shop
        </Button>
        </Link>
          </Stack>
        </Center>
    </Box>
  )
}

export default EmptyCart