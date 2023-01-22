import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppSelector } from "../../redux/store";
import {
  addedToCart,
  addedToCheckout,
  getAllPrice,
  getAllPurchasedPrice,
} from "./DashboardCard";
import { Box, Flex } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { products } = useAppSelector((store) => store.productManager);
  const { allProfiles } = useAppSelector((store) => store.profileManager);

  const data1 = {
    labels: ["Sales", "Inventory Cost"],
    datasets: [
      {
        label: "Total Price",
        data: [getAllPurchasedPrice(allProfiles), getAllPrice(products)],
        backgroundColor: ["rgba(63, 195, 128)", "rgba(250,128,114)"],
        borderColor: ["rgba(63, 195, 128)", "rgba(250,128,114)"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Added To Cart", "Checkout"],
    datasets: [
      {
        label: "Number of Products",
        data: [addedToCart(allProfiles), addedToCheckout(allProfiles)],
        backgroundColor: ["rgba(135,206,250)", "rgba(255,215,0)"],
        borderColor: ["rgba(63, 195, 128)", "rgba(250,128,114)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Flex
      mt="30px"
      flexDir={{ lg: "row", md: "row", sm: "column" }}
      align="center"
      justify="space-around"
    >
      <Box>
        <Pie data={data1} />
      </Box>
      <Box>
        <Pie data={data2} />
      </Box>
    </Flex>
  );
};

export default Chart;
