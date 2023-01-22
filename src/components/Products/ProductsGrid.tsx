import { Box, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { ProductsTypo } from "../../constants/ProductsTypo";
import ProductsCard from "./ProductsCard";

type Props = {
  data?: ProductsTypo[];
};

const ProductsGrid = ({ data }: Props) => {
  return (
    <Box>
      <Grid
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={{ lg: "30px", md: "20px", sm: "10px" }}
      >
        {data?.map((prod) => (
          <Link to={`/men/t-shirt/${prod.id}`} key={prod.id}>
            <GridItem
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              border="1px"
              borderColor="gray.300"
            >
              <ProductsCard prod={prod} />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsGrid;
