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
import {CloseIcon,AddIcon,MinusIcon} from "@chakra-ui/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";
import { getProfile, updateCart } from "../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import shoppingBag from "./image/shopping-bag.png";

const Cart = () => {
  const dispatch:any = useAppDispatch();

  const { profile } = useAppSelector((store) => store.profileManager);
    let totalPrice: number = 0;

useEffect(()=>{
 dispatch(getProfile("Amaan Siddiqui","Aman!234"))
  },[])


//update cart products quantity---------------------------------------------->
const handleUpdateCart=(val:number, prodId: number)=>{
  let id: number = profile[0].id
  const newCart: ProductsTypo[] = profile[0].cart.map((prod) => {
    if(prod.id === prodId){
      prod.qty = val
      return prod
    }
    return prod
})
  dispatch(updateCart(id, newCart))
}

//Delete cart products from cart--------------------------------------------->
const handleDeleteCart=(prodId: number)=>{
  let id: number = profile[0].id
  const newCart: ProductsTypo[] = profile[0].cart.filter((prod) => {
      return prod.id !== prodId
})
  dispatch(updateCart(id, newCart))
}


//clere cart items----------------------------------------------------------->
// const handleClearCart=()=>{
//   let id: number = profile[0].id
//   const newCart: [] = [];
//   dispatch(updateCart(id,newCart))
// }


//while cart is empty-------------------------------------------------------->
  if (profile.length === 0) {
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

  // while products is added to cart-------------------------------------------->
  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", lg: "row" }}
        m="auto"
        p={{ base: 0, lg: 10 }}
        gap={5}
      >
  {/* Products details in Table formate        */}
        <Box w={{ base: "full", md: "full", lg: "70%" }} bg={"gray.200"}>
          <TableContainer overflowX={"auto"}>
            <Table
              variant="simple"
              size={{ base: "xs", md: "md", lg: "lg" }}
              textAlign="left"
            >
              <TableCaption  color={"gray.700"} fontWeight="semibold">30 days Free Return</TableCaption>
              <Thead bg={"gray.700"} >
                <Tr>
                  <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>Product</Th>
                  <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>Price</Th>
                  <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>Quantity</Th>
                  <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>Subtotal</Th>
                  <Th color="white" fontSize={{ base: "xs", md: "md", lg: "lg" }}>Remove</Th>
                </Tr>
              </Thead>
              <Tbody>
                {profile &&
                  profile[0]?.cart?.map((el) => {
                    totalPrice += el.price * el.qty;
                    return (
                      <Tr key={el.id} >
                        <Td color={"gray.700"} fontWeight="semibold">
                          <Stack direction={{base:"column",xl:"row"}}>
                            <Image w={{base:"50px",md:"100px"}} h={{base:"50px",md:"100px"}} src={el.images[0]}/>
                            <Box>
                              <Text>{el.type+el.category}</Text>
                              <Text>Size:-{el.sizes}</Text>
                              <Text>{el.specification.fabric}</Text>
                            </Box>
                          </Stack>
                        </Td>
                        <Td  color={"gray.700"} fontWeight="semibold">{el.price}</Td>
                        <Td  color={"gray.700"} fontWeight="semibold">
                          <Stack direction={{ base: "column", md: "row" }}>
                            <Box onClick={()=>handleUpdateCart(el.qty-1, el.id)}><MinusIcon bg={"whiteAlpha.300"} cursor={"pointer"} /></Box>
                              <Box   color={"gray.700"} fontWeight="semibold">{el.qty}</Box>
                            <Box onClick={()=>handleUpdateCart(el.qty+1, el.id)}><AddIcon bg={"whiteAlpha.300"} cursor={"pointer"} /></Box>
                          </Stack>
                        </Td>
                        <Td  color={"gray.700"} fontWeight="semibold">{el.price * el.qty}</Td>
                        <Td  color={"gray.700"} fontWeight="semibold">
                          <Box onClick={()=>handleDeleteCart(el.id)}><CloseIcon cursor={"pointer"}  /></Box>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        
        <Box bg={"gray.200"} w={{ base: "full", md: "full", lg: "25%" }}>
          <Box h={50} bg={"gray.700"}>
            <Heading p={3} fontWeight={"bold"} fontSize={15} color={"white"}>
              CART TOTAL
            </Heading>
          </Box>
          <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
            color={"gray.700"}
          >
            <Text>Total price</Text>
            <Text>{totalPrice}</Text>
          </HStack>
          <Divider  orientation="horizontal" />
          <HStack  color={"white"} fontWeight="semibold" p={5}>
            <Input placeholder="Apply Promocode" autoFocus={true} />
            <Button bg={"gray.700"}>Apply</Button>
          </HStack>
          <Divider  orientation="horizontal" />
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
              <Button bg={"gray.700"}>Continue shopping</Button>
            </Link>
            <Button  bg={"gray.700"}>Clear cart</Button>
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
              <Button bg={"gray.700"} w={"full"}>
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
