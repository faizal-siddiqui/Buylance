import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { ProductsTypo } from "../../constants/ProductsTypo";

type Props = {
  prod: ProductsTypo;
};

const ProductsCarausel = ({ prod }: Props) => {
  const [index, setIndex] = React.useState<number>(0);
  const [flag, setFlag] = React.useState<boolean>(false);
  const ref = React.useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  const resetCarausel = () => {
    setFlag(false);
    clearInterval(ref.current);
    ref.current = undefined;
    setIndex(0);
  };

  const startCarausel = () => {
    setFlag(true);
    if (ref.current !== undefined) {
      return;
    }

    ref.current = setInterval(() => {
      setIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 1500);
  };

  React.useEffect(() => {
    return () => {
      resetCarausel();
    };
  }, []);

  return (
    <>
      <Box position="relative">
        <Image
          //   zIndex="-10"
          onMouseOver={startCarausel}
          onMouseLeave={resetCarausel}
          src={prod.images[index]}
          alt=""
        />
        {flag ? (
          <Box
            onMouseOver={() => setFlag(true)}
            onMouseLeave={() => setFlag(false)}
            position="absolute"
            bottom="0px"
            w="100%"
            transition="2s"
            h="30px"
            // bgColor="red"
          >
            <Button bgColor={"#f7f09f"} borderRadius="0%" h="100%" w="100%">
              Buy Now
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default ProductsCarausel;
