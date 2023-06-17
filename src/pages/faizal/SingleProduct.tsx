import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import LargeWithAppLinksAndSocial from "../../components/Footer/footer/footer";
import { useApi } from "../../components/Hooks/useApi";
import { useSingleProductApi } from "../../components/Hooks/useSingleProductApi";
import UpdatedNavbar from "../../components/Navbar/UpdatedNavbar";
import ProductsGrid from "../../components/Products/ProductsGrid";
import ImagesCompo from "../../components/singleProducts/ImagesCompo";
import ProductDetails from "../../components/singleProducts/ProductDetails";
import { ProductsTypo } from "../../constants/ProductsTypo";
import SkeletonLoading from "../../components/Products/SkeletonLoading";

type Props = {};

const SingleProduct = (props: Props) => {
  // const [product, setProduct] = useState<ProductsTypo | {}>({});
  const { id } = useParams();
  const [loading, error, data, apifn] = useSingleProductApi();
  const [loading2, error2, data2, apifn2] = useApi();
  const toast = useToast();

  useEffect(() => {
    apifn({
      method: "get",
      url: `https://buylance-com.onrender.com/products/${id}`,
    });
  }, []);

  useEffect(() => {
    apifn2({
      method: "get",
      url: `https://buylance-com.onrender.com/products?_limit=12&_page=${2}`,
    });
  }, []);

  return (
    <Box>
      <UpdatedNavbar />

      <Box
        my={{ lg: "160px", md: "90px", sm: "100px" }}
        mx={{ lg: "2%", md: "3%", sm: "4%" }}
      >
        <Box></Box>
        <Flex flexDir={{ lg: "row", md: "row", sm: "column" }}>
          <Box w={{ lg: "50%", md: "50%", sm: "100%" }}>
            <ImagesCompo data={data} />
          </Box>
          <Box
            pb="15px"
            border="1px"
            borderColor="gray.300"
            w={{ lg: "50%", md: "50%", sm: "100%" }}
          >
            <ProductDetails data={data} />
          </Box>
        </Flex>
      </Box>
      <Box mx={{ lg: "2%", md: "3%", sm: "4%" }} my="30px">
        <Text my="20px" fontSize="25px" fontWeight={"500"}>
          Similar Products
        </Text>
        {loading2 ? (
          <SkeletonLoading numbers={20} />
        ) : error2 ? (
          toast({
            title: "An Error occured",
            description: "Sorry for the inconvienience Try after some time",
            status: "error",
            position: "top",
            duration: 9000,
            isClosable: true,
          })
        ) : (
          <ProductsGrid data={data2} />
        )}
      </Box>
      <LargeWithAppLinksAndSocial />
    </Box>
  );
};

export default SingleProduct;
