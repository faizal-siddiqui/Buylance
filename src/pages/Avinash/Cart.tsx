import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";
import { getProfile } from "../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import shoppingBag from "./image/shopping-bag.png";

const Cart = () => {
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<ProfileTypo>();
  const { profile } = useAppSelector((store) => store.profileManager);
  const data: ProductsTypo[] = [];

  let totalPrice: number = 0;

  if (data.length === 0) {
    return (
      <>
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
      </>
    );
  }
  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", lg: "row" }}
        m="auto"
        p={{ base: 0, lg: 10 }}
        gap={5}
      >
        <Box w={{ base: "full", md: "full", lg: "70%" }} bg={"pink.600"}>
          <TableContainer>
            <Table
              variant="simple"
              size={{ base: "xs", md: "md", lg: "lg" }}
              textAlign="center"
              align="center"
            >
              <TableCaption color={"white"}>30 days Free Return</TableCaption>
              <Thead bg={"gray.300"}>
                <Tr>
                  <Th fontSize={{ base: "xs", md: "md", lg: "lg" }}>Product</Th>
                  <Th fontSize={{ base: "xs", md: "md", lg: "lg" }}>Price</Th>
                  <Th fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                    Quantity
                  </Th>
                  <Th fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                    Subtotal
                  </Th>
                  <Th fontSize={{ base: "xs", md: "md", lg: "lg" }}>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((el) => {
                    totalPrice += el.price * el.qty;
                    return (
                      <Tr key={el.id}>
                        <Td color={"white"}>
                          <Stack direction={{base:"column",md:"row"}}>
                            <Image src={el.images[0]}/>
                            <Box>
                              <Text>{el.type}+{el.category}</Text>
                              <Text>{el.sizes}</Text>
                            </Box>
                          </Stack>
                        </Td>
                        <Td color={"white"}>{el.price}</Td>
                        <Td>
                          <Stack direction={{ base: "column", md: "row" }}>
                            <Button
                              fontSize={20}
                              fontWeight={"bold"}
                              bg={"whiteAlpha.400"}
                              w={{ sm: "10px", md: "30px", lg: "30px" }}
                            >
                              -
                            </Button>
                            <Box
                              color={"white"}
                              w={{ sm: "10px", md: "30px", lg: "30px" }}
                              p={2}
                              textAlign="center"
                            >
                              {el.qty}
                            </Box>
                            <Button
                              fontSize={20}
                              fontWeight={"bold"}
                              bg={"whiteAlpha.400"}
                              w={{ sm: "10px", md: "30px", lg: "30px" }}
                            >
                              +
                            </Button>
                          </Stack>
                        </Td>
                        <Td color={"white"}>{el.price * el.qty}</Td>
                        <Td>
                          <AiOutlineCloseCircle color="white" />
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box bg={"yellow.600"} w={{ base: "full", md: "full", lg: "25%" }}>
          <Box h={50} bg={"gray.300"}>
            <Heading p={3} fontWeight={"bold"} fontSize={15} color={"gray.600"}>
              CART TOTAL
            </Heading>
          </Box>
          <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
            color={"white"}
          >
            <Text>Total price</Text>
            <Text>{totalPrice}</Text>
          </HStack>
          <Divider orientation="horizontal" />
          <HStack color={"white"} p={5}>
            <Input placeholder="Apply Promocode" />{" "}
            <Button bg={"pink.600"}>Apply</Button>
          </HStack>
          <Divider orientation="horizontal" />
          <Stack
            direction={{ base: "row", lg: "column", xl: "row" }}
            fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
            color={"white"}
          >
            <Link to="/">
              <Button bg={"pink.600"}>Continue shopping</Button>
            </Link>
            <Button bg={"pink.600"}>Clear cart</Button>
          </Stack>
          <Divider orientation="horizontal" />
          <Box
            fontSize={{ base: "xs", md: "md", lg: "md", xl: "lg" }}
            fontWeight={"bold"}
            h={50}
            m={5}
            color={"white"}
          >
            <Link to="/address">
              <Button bg={"pink.600"} w={"full"}>
                Proceed to checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;
