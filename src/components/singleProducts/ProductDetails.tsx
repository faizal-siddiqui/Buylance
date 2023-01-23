import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { getProfile, updateCart } from "../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Pincode from "./Pincode";
import Rating from "./Rating";

type Props = {
  data?: ProductsTypo;
};

const style = {};

const ProductDetails = ({ data }: Props) => {
  const { loading, error, profile, allProfiles } = useAppSelector(
    (store) => store.profileManager
  );

  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));
  const dispatch: any = useAppDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch]);

  const addToCart = () => {
    let updatedCart: ProductsTypo[] | [] = [];
    const cart: ProductsTypo[] = profile[0]?.cart;
    if (data) {
      updatedCart = [...cart, data];
    }
    dispatch(updateCart(id, updatedCart));
  };

  return (
    <Box ml={{ lg: "20px", md: "20px", sm: "0px" }}>
      <Text fontSize="25px" fontWeight={"500"}>
        {data?.name}
      </Text>
      <Text fontSize="25px" fontWeight={"500"}>
        {data?.brand}
      </Text>
      <Text fontSize="25px" fontWeight={"500"} color="green">
        {" "}
        ₹ {data?.price}
      </Text>
      <Flex fontSize="18px" fontWeight={"500"} align="center">
        <Text>
          {" "}
          MRP <s>₹ {data?.mrp}</s>{" "}
        </Text>
        <Text p="5px" bgColor="red" color="#fff" ml="15px">
          {data?.discount}% OFF
        </Text>
      </Flex>
      <Text fontSize="18px"> {data?.productDetails}</Text>
      <Link to="#">
        <Button
          onClick={() => {
            addToCart();
            toast({
              title: "Added to Cart.",
              description: "",
              position: "top",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }}
          fontSize="18px"
          my="30px"
          p="30px"
          color="#fff"
          bgColor="gold"
          w="60%"
        >
          BUY NOW
        </Button>
      </Link>
      <Text>
        <Pincode />
      </Text>
      <Text>
        <Rating data={data} />
      </Text>
      <Text>
        <Text my="20px" fontSize="25px" fontWeight={"500"}>
          Specification
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap="20px">
          <GridItem borderBottom="1px" borderColor="gray.400">
            {data?.specification?.fabric}
          </GridItem>
          <GridItem borderBottom="1px" borderColor="gray.400">
            {data?.specification?.fit}
          </GridItem>
          <GridItem borderBottom="1px" borderColor="gray.400">
            {data?.specification?.length}
          </GridItem>
          <GridItem borderBottom="1px" borderColor="gray.400">
            {data?.specification?.mainTrend}
          </GridItem>
        </Grid>
      </Text>
      <Text>
        <Text my="20px" fontSize="25px" fontWeight={"500"}>
          Material
        </Text>
        <Text>{data?.material}</Text>
      </Text>
    </Box>
  );
};

export default ProductDetails;
