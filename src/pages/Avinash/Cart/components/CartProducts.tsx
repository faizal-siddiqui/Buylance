import {
  Box,
  Image,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CloseIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { ProductsTypo } from "../../../../constants/ProductsTypo";
import { updateCart } from "../../../../redux/actions/ProfileAction";

const CartProducts = () => {
  const dispatch: any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);
  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));
  //update cart products quantity---------------------------------------------->
  const handleUpdateCart = (val: number, prodId: number) => {
    
    const newCart: ProductsTypo[] = profile[0].cart.map((prod) => {
      if (prod.id === prodId) {
        prod.qty = val;
        return prod;
      }
      return prod;
    });
    dispatch(updateCart(id, newCart));
  };

  //Delete cart products from cart--------------------------------------------->
  const handleDeleteCart = (prodId: number) => {
   
    const newCart: ProductsTypo[] = profile[0].cart.filter((prod) => {
      return prod.id !== prodId;
    });
    dispatch(updateCart(id, newCart));
  };
  return (
    <Box
      w={{ base: "full", lg: "70%" }}
      boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
    >
      <TableContainer overflowX={"auto"}>
        <Table
          size={{ base: "xs", md: "md", lg: "lg" }}
          textAlign="left"
          variant="striped"
          colorScheme="teal"
        >
          <TableCaption color={"blue.500"} fontWeight="bold">
            30 days Free Return
          </TableCaption>
          <Thead bg={"blue.500"}>
            <Tr>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Product
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Price
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Quantity
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Subtotal
              </Th>
              <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {profile &&
              profile[0]?.cart?.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={{ base: "column", xl: "row" }}>
                        <Image
                          objectFit={"contain"}
                          w={{ base: "50px", md: "100px" }}
                          h={{ base: "50px", md: "100px" }}
                          src={el.images[0]}
                        />
                        <Box>
                          <Text>{el.type + el.category}</Text>
                          <Text>{el.specification.fabric}</Text>
                          <Select w={"80px"}>
                            <option value="">Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </Select>
                        </Box>
                      </Stack>
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={"column"}>
                        <Text color={"red.400"} as="s">
                          RS {el.mrp}/-
                        </Text>
                        <Text color="blue.500">RS {el.price}/-</Text>
                      </Stack>
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Stack direction={{ base: "column", md: "row" }}>
                        <Box
                          onClick={() => handleUpdateCart(el.qty - 1, el.id)}
                        >
                          <MinusIcon cursor={"pointer"} />
                        </Box>
                        <Box color={"gray.700"} fontWeight="semibold">
                          {el.qty}
                        </Box>
                        <Box
                          onClick={() => handleUpdateCart(el.qty + 1, el.id)}
                        >
                          <AddIcon cursor={"pointer"} />
                        </Box>
                      </Stack>
                    </Td>
                    <Td color="blue.500" fontWeight="semibold">
                      {el.price * el.qty}/-
                    </Td>
                    <Td color={"gray.700"} fontWeight="semibold">
                      <Box onClick={() => handleDeleteCart(el.id)}>
                        <CloseIcon color={"red.500"} cursor={"pointer"} />
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartProducts;
