import React from 'react'
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
} from "@chakra-ui/react"
import {CloseIcon,AddIcon,MinusIcon} from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { ProductsTypo } from '../../../../constants/ProductsTypo';
import { updateCart } from '../../../../redux/actions/ProfileAction';

const CartProducts = () => {
    const dispatch:any = useAppDispatch();
    const { profile } = useAppSelector((store) => store.profileManager);

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
  return (
    <Box w={{ base: "full",lg: "70%" }} bg={"gray.200"}>
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
                    return (
                      <Tr key={el.id} >
                        <Td color={"gray.700"} fontWeight="semibold">
                          <Stack direction={{base:"column",xl:"row"}}>
                            <Image objectFit={"contain"} w={{base:"50px",md:"100px"}} h={{base:"50px",md:"100px"}} src={el.images[0]}/>
                            <Box>
                              <Text>{el.type+el.category}</Text>
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
                        <Td  color={"gray.700"} fontWeight="semibold">
                           <Stack direction={"column"}>
                            <Text color={"red.400"} as='s'>RS {el.mrp}/-</Text>
                            <Text>RS {el.price}/-</Text>
                           </Stack> 
                        </Td>
                        <Td  color={"gray.700"} fontWeight="semibold">
                          <Stack direction={{ base: "column", md: "row" }}>
                            <Box onClick={()=>handleUpdateCart(el.qty-1, el.id)}><MinusIcon bg={"whiteAlpha.900"} cursor={"pointer"} /></Box>
                              <Box   color={"gray.700"} fontWeight="semibold">{el.qty}</Box>
                            <Box onClick={()=>handleUpdateCart(el.qty+1, el.id)}><AddIcon bg={"whiteAlpha.900"} cursor={"pointer"} /></Box>
                          </Stack>
                        </Td>
                        <Td  color={"gray.700"} fontWeight="semibold">{el.price * el.qty}</Td>
                        <Td  color={"gray.700"} fontWeight="semibold">
                          <Box onClick={()=>handleDeleteCart(el.id)}><CloseIcon bg={"whiteAlpha.900"} cursor={"pointer"}  /></Box>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
  )
}

export default CartProducts