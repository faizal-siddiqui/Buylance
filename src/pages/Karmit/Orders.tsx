import React, { useEffect } from "react";
import OrderedProductsCard from "../../components/Order/OrderedProductsCard";
import {
  getProfile,
  patchOrderedProducts,
} from "../../redux/actions/ProfileAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer/footer";
import "../../components/Order/orderdiv.css";
import UpdatedNavbar from "../../components/Navbar/UpdatedNavbar";
const Orders = () => {
  const dispatch: any = useAppDispatch();
  const { profile } = useAppSelector((store) => store.profileManager);
  console.log(profile);

  const id: number = Number(JSON.parse(localStorage.getItem("id") || ""));

  const handleCancelOrder = (id: number) => {
    let newOrderedProducts = profile[0].orderedProducts?.filter((el) => {
      return el.id !== id;
    });

    dispatch(patchOrderedProducts(profile[0].id, newOrderedProducts));
  };

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);
  return (
    <div>
      <UpdatedNavbar />
      <h1
        style={{
          color: "#c9048f",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "36px",
          fontWeight: "bold",
          margin: "20px",
          marginBottom: "0%",
          marginTop: "160px",
        }}
      >
        Order Summary
      </h1>{" "}
      <div className="container">
        {profile[0] &&
          profile[0]?.orderedProducts?.map((prod) => {
            return (
              <OrderedProductsCard
                key={prod.id}
                prod={prod}
                handleCancelOrder={handleCancelOrder}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
