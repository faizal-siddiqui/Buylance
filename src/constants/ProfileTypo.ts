import { ProductsTypo } from "./ProductsTypo";

export interface ProfileTypo {
  id: number;
  isActive?: boolean;
  name: string;
  email: string;
  mobile: number;
  gender: string;
  birthDate: string;
  location: string;
  cardDetails: string;
  password: string;
  cart: ProductsTypo[];
  orderedProducts: ProductsTypo[];
}
