import { useEffect } from "react";
import { getProfile } from "../../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import EmptyCart from "./components/EmptyCart";
import CartProducts from "./components/CartProducts";
import { Flex } from "@chakra-ui/react";
import CartTotal from "./components/CartTotal";

const Cart = () => {
  const dispatch:any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);
     

useEffect(()=>{
 dispatch(getProfile("amaansidp@gmail.com","Aman!234"))
  },[dispatch])


//while cart is empty-------------------------------------------------------->
  if (profile[0]?.cart?.length === 0) {
    return (
      <>
      <EmptyCart/>
      </>
    );
  }

// while products is added to cart-------------------------------------------->
  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column",lg:"row" }}
        m="auto"
        p={{ base: 0, lg: 10 }}
        gap={5}
      >
        <CartProducts/>
        <CartTotal/>
      </Flex>
    </>
  );
};

export default Cart;
