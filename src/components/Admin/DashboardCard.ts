import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";

export const getAllPrice = (products: ProductsTypo[]): number => {
  let totalPrice = [...products]?.reduce((acc: number, el: ProductsTypo) => {
    return acc + el.price;
  }, 0);

  return totalPrice;
};
 
export const getAllPurchasedPrice = (allProfiles: ProfileTypo[]): number => {
  let totalPurchasePrice = allProfiles?.reduce(
    (acc: number, el: ProfileTypo) => {
      return (
        acc +
        el.orderedProducts?.reduce((acc: number, prod: ProductsTypo) => {
          return acc + prod.price;
        }, 0)
      );
    },
    0
  );
  return totalPurchasePrice;
};

export const addedToCart = (allProfiles: ProfileTypo[]): number => {
  const totalAddedCart = allProfiles?.reduce((acc: number, el: ProfileTypo) => {
    return acc + el.cart.length;
  }, 0);
  return totalAddedCart;
};
export const addedToCheckout = (allProfiles: ProfileTypo[]): number => {
  const totalAddedCheckout = allProfiles?.reduce(
    (acc: number, el: ProfileTypo) => {
      return acc + el.orderedProducts.length;
    },
    0
  );
  return totalAddedCheckout;
};
