import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { updateCart } from "../../../../redux/actions/ProfileAction";
import { ProductsTypo } from "../../../../constants/ProductsTypo";

const CartTotal = () => {
  const dispatch: any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [promocode, setPromocode] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(e.target.value);
  };

  //Get Promocode------------------------------------------------------------>
  function makeid(length: number) {
    var result: string = "";
    var characters: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // console.log(makeid(5));
  const getPromocode = () => {
    setPromocode(makeid(10));
  };

  //Discunt managemant------------------------------------------------------->
  const getDiscount = () => {
    if (promocode === inputText) {
      setDiscount(Math.round((totalPrice * 10) / 100));
    } else {
      alert("Wrong Promocode");
    }
    setInputText("");
  };

  //clere cart items----------------------------------------------------------->
  const handleClearCart = () => {
    const newCart: [] = [];
    dispatch(updateCart(id, newCart));
  };

  //Update Total Price--------------------------------------------------------->
  let total: number = 0;
  const handlePrice = () => {
    profile[0]?.cart?.map((el: ProductsTypo) => {
      return (total += el.price * el.qty);
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
      w={{ base: "full", lg: "25%" }}
      color="white"
    >
      <Box h={50} bg={"blue.500"}>
        <Heading p={3} fontWeight={"bold"} fontSize={15}>
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
          {discount > 0 ? (
            <Text as={"s"} color={"red.400"}>
              RS {totalPrice}/-
            </Text>
          ) : (
            <Text color={"green.500"}>RS {totalPrice}/-</Text>
          )}
        </HStack>
        {discount > 0 && (
          <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Text color={"gray.700"}>Discount</Text>
            <Box color={"green.500"} border="2px solid green" borderRadius={10}>
              RS {discount}/-
            </Box>
          </HStack>
        )}
        {discount > 0 && (
          <HStack
            p={5}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            h={50}
            m={5}
          >
            <Text color={"gray.700"}>Total Price</Text>
            <Text color={"green.500"}>RS {totalPrice - discount}/-</Text>
          </HStack>
        )}
      </Box>
      <Stack p={5} justifyContent={"space-between"}>
        <Button fontWeight={"bold"} colorScheme="teal" onClick={getPromocode}>
          Get Promocode
        </Button>
        {promocode && (
          <Box
            color="green.500"
            p={2}
            fontWeight={"bold"}
            border={"2px solid green"}
            borderRadius={10}
          >
            {promocode}
          </Box>
        )}
      </Stack>

      <Divider orientation="horizontal" />
      <HStack fontWeight="semibold" p={5}>
        <Input
          placeholder="Apply Promocode"
          autoFocus={true}
          color="green.500"
          fontWeight={"bold"}
          onChange={handleChange}
          name="promo"
          value={inputText}
        />
        <Button colorScheme="blue" onClick={getDiscount}>
          Apply
        </Button>
      </HStack>
      <Divider orientation="horizontal" />
      <Box
        fontSize={{ base: "xs", md: "md", lg: "md", xl: "lg" }}
        fontWeight={"bold"}
        h={50}
        m={5}
      >
        <Link to="/address">
          <Button colorScheme="blue" w={"full"}>
            Proceed to checkout
          </Button>
        </Link>
      </Box>
      <Divider orientation="horizontal" />
      <Stack
        direction={{ base: "row" }}
        fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
        justifyContent={"space-between"}
        fontWeight={"bold"}
        h={50}
        m={5}
      >
        <Link to="/">
          <Button colorScheme="blue">Continue shopping</Button>
        </Link>
        <Button onClick={() => handleClearCart()} colorScheme="red">
          Clear cart
        </Button>
      </Stack>
    </Box>
  );
};

export default CartTotal;
