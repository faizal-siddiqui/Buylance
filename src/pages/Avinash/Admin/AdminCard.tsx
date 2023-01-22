import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { ProductsTypo } from "../../../constants/ProductsTypo";
import { deleteProducts } from "../../../redux/actions/ProductAction";
import { useAppDispatch } from "../../../redux/store";

type CardProps = {
  prod: ProductsTypo;
};
export default function AdminCard({ prod }: CardProps) {

  const dispatch: any = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteProducts(prod.id));
  };

  return (
    <Center py={12} key={prod.id}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Image
          rounded={"lg"}
          width={282}
          objectFit={"cover"}
          src={prod.images[0]}
        />

        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {prod.brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {prod.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              RS {prod.price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              RS {prod.mrp}
            </Text>
          </Stack>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            bg={"blue.400"}
            _focus={{
              bg: "blue.500",
            }}
            _hover={{
              bg: "blue.500",
            }}
          >
            Update
          </Button>
          <Button
            onClick={deleteProduct}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "red.500",
            }}
            _focus={{
              bg: "red.500",
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
