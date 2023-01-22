import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";
import { getProducts } from "../../redux/actions/ProductAction";
import { getAllProfile } from "../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addedToCart,
  addedToCheckout,
  getAllPrice,
  getAllPurchasedPrice,
} from "./DashboardCard";
 
interface PanelObj {
  id: number;
  label: string;
  percentage: string;
  smallIcon: string;
  incDec: string;
  largeIcon: string;
}

type Props = {};

const DashboardCards = (props: Props) => {
  const dispatch: any = useAppDispatch();
  const { products } = useAppSelector((store) => store.productManager);
  const { allProfiles } = useAppSelector((store) => store.profileManager);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProfile());
  }, []);

  const a = 1;
  const b = 1;

  const PANELS: PanelObj[] = [
    {
      id: 1,
      label: "Total Inventory cost",
      percentage: `₹ ${getAllPrice(products)}`,
      smallIcon: "./upwardArrow.png",
      incDec: `${40} %`,
      largeIcon: "./conversion.png",
    },
    {
      id: 2,
      label: "Added to Cart",
      percentage: `${addedToCart(allProfiles)}`,
      smallIcon: "./upwardArrow.png",
      incDec: `${Math.ceil(products?.length / addedToCart(allProfiles))} %`,
      largeIcon: "./cart.png",
    },
    {
      id: 3,
      label: "Reached checkout",
      percentage: `${addedToCheckout(allProfiles)}`,
      smallIcon: "./downwardArrow.png",
      incDec: `${
        (addedToCart(allProfiles) / addedToCheckout(allProfiles)) * 10
      } %`,
      largeIcon: "./checkout.png",
    },
    {
      id: 4,
      label: "Total Sales",
      percentage: `₹ ${getAllPurchasedPrice(allProfiles)}`,
      smallIcon: "./upwardArrow.png",
      incDec: `${a * b} %`,
      largeIcon: "./sales.png",
    },
  ];

  return (
    <Box>
      <Grid
        my="20px"
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={"20px"}
      >
        {PANELS.map((el) => (
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            bgColor="#fff"
            p="10px"
            key={el.id}
          >
            <Flex align="center" justify="space-around">
              <Box>
                <Text
                  color="#BFC6D0"
                  fontSize={{ lg: "16px", md: "14px", sm: "12px" }}
                >
                  {el.label}
                </Text>
                <Flex align="center" justify="space-between" w="100%">
                  <Text
                    mr="5px"
                    fontWeight="600"
                    fontSize={{ lg: "25px", md: "20px", sm: "15px" }}
                  >
                    {el.percentage}
                  </Text>
                  <Text mr="5px">
                    <Image src={el.smallIcon} alt="" />
                  </Text>
                  <Text
                    mr="5px"
                    color="#BFC6D0"
                    fontWeight="600"
                    fontSize={{ lg: "16px", md: "14px", sm: "12px" }}
                  >
                    {el.incDec}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text>
                  <Image src={el.largeIcon} alt="" />
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardCards;
