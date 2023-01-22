import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {
  data?: ProductsTypo;
};

const ImagesCompo = ({ data }: Props) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <Box>
      <Flex>
        <Box w={{ lg: "20%", md: "20%", sm: "20%" }}>
          {data?.images?.map((img: string, i) => (
            <Box
              key={i * 2134}
              p="20px"
              border="2px"
              borderColor={index == i ? "gold" : "#fff"}
              onMouseOver={() => setIndex(i)}
            >
              <Image src={img} alt={img} />
            </Box>
          ))}
        </Box>
        <Box w={{ lg: "80%", md: "80%", sm: "80%" }}>
          <Image src={data?.images[index]} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ImagesCompo;
