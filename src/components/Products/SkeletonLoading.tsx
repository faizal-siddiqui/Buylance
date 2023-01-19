import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {
  numbers: number;
};

const SkeletonLoading = ({ numbers = 10 }: Props) => {
  return (
    <Box>
      <Grid gap="30px" templateColumns={{ lg: "repeat(4, 1fr)" }}>
        {[...new Array(numbers)].map((el, i) => {
          return (
            <GridItem key={i * 1000}>
              <Skeleton
                h="250px"
                bg="green.500"
                color="white"
                fadeDuration={1}
              ></Skeleton>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkeletonLoading;
