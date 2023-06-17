import { useEffect } from "react";
import { getProfile } from "../../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import EmptyCart from "./components/EmptyCart";
import CartProducts from "./components/CartProducts";
import { Box, Flex } from "@chakra-ui/react";
import CartTotal from "./components/CartTotal";
import LargeWithAppLinksAndSocial from "../../../components/Footer/footer/footer";
import UpdatedNavbar from "../../../components/Navbar/UpdatedNavbar";

const Cart = () => {
  const dispatch: any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);
  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));
  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch]);

  //while cart is empty-------------------------------------------------------->
  if (profile[0]?.cart?.length === 0) {
    return (
      <>
        <EmptyCart />
      </>
    );
  }

  // while products is added to cart-------------------------------------------->
  return (
    <>
      <UpdatedNavbar />
      <Box
        my={{ lg: "150px", md: "100px", sm: "100px" }}
        mx={{ lg: "2%", md: "3%", sm: "4%" }}
      >
        <Flex
          justifyContent={"space-evenly"}
          flexDirection={{ base: "column", lg: "row" }}
          m="auto"
          p={{ base: 0, lg: 10 }}
          gap={5}
        >
          <CartProducts />
          <CartTotal />
        </Flex>
        <LargeWithAppLinksAndSocial />
      </Box>
    </>
  );
};

export default Cart;
