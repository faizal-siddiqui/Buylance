import React,{useEffect,useState} from 'react'
import {
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { updateCart } from '../../../../redux/actions/ProfileAction';
import { ProductsTypo } from '../../../../constants/ProductsTypo';
import { red } from '@mui/material/colors';

const CartTotal = () => {
    const dispatch:any = useAppDispatch();
    const { profile } = useAppSelector((store) => store.profileManager);
    const[totalPrice,setTotalPrice]=useState<number>(0);
    const[promocode,setPromocode]=useState<string>("");
    const[inputText,setInputText]=useState<string>("");
    const [discount,setDiscount]= useState<number>(0);

const handleChange = (e: { target: { value: React.SetStateAction<string> } })=>{
 setInputText(e.target.value)
} 

const getDiscount=()=>{
   if(promocode===inputText){
    setDiscount(Math.round((totalPrice*10)/100))
   }else{
    alert("Wrong Promocode")
   }
   setInputText("") 
}
    
//clere cart items----------------------------------------------------------->
const handleClearCart=()=>{
    let id: number = profile[0].id
    const newCart: [] = [];
    dispatch(updateCart(id,newCart))
  }

  let total:number=0;
const handlePrice=()=>{
    profile[0]?.cart?.map((el:ProductsTypo)=>{
        
        return total+=el.price*el.qty
    })
    setTotalPrice(total);
}

useEffect(()=>{
    handlePrice()
},[profile])


  return (
    <Box bg={"gray.200"} w={{ base: "full",  lg: "25%" }} >
          <Box h={50} bg={"gray.700"}>
            <Heading p={3} fontWeight={"bold"} fontSize={15} color={"white"}>
              CART TOTAL
            </Heading>
          </Box>
          <Box>
          <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
            color={"gray.700"}
          >
            <Text>Sub Total</Text>
            {discount>0?<Text as={"s"} color={"red.400"}>RS {totalPrice}/-</Text>:<Text>RS {totalPrice}/-</Text>}
          </HStack>
          {discount>0 && <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Text color={"gray.700"}>Discount</Text>
            <Box color={"green.500"} border="2px solid green" borderRadius={10}>RS {discount}/-</Box>
          </HStack>}
         {discount>0 &&  <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Text color={"gray.700"}>Total Price</Text>
            <Text color={"green.500"}>RS {totalPrice-discount}/-</Text>
          </HStack>}
          
          </Box>
          <HStack
            p={5}
            justifyContent={"space-between"}
            h={5}
          >
           <Button fontWeight={"bold"} bg={"green.300"} onClick={()=>setPromocode("BylancePromoXyz05")}>Get Promocode</Button>
          {promocode && <Box color="green.500" p={2} fontWeight={"bold"} border={"2px solid green"} borderRadius={10}>{promocode}</Box>}
          </HStack>
          
          <Divider  orientation="horizontal" />
          <HStack   fontWeight="semibold" p={5}>
            <Input
             placeholder="Apply Promocode"
             autoFocus={true} color="green.500"
             fontWeight={"bold"}
             onChange={handleChange}
             name="promo"
             value={inputText}
            />
            <Button bg={"gray.400"} onClick={getDiscount}>Apply</Button>
          </HStack>
          <Divider  orientation="horizontal" />
          <Stack
            direction={{ base: "row" }}
            fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Link to="/">
              <Button bg={"gray.400"}>Continue shopping</Button>
            </Link>
            <Button onClick={()=>handleClearCart()}  bg={"gray.400"}>Clear cart</Button>
          </Stack>
          <Divider orientation="horizontal" />
          <Box
            fontSize={{ base: "xs", md: "md", lg: "md", xl: "lg" }}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Link to="/address">
              <Button bg={"gray.400"} w={"full"}>
                Proceed to checkout
              </Button>
            </Link>
          </Box>
        </Box>
  )
}

export default CartTotal