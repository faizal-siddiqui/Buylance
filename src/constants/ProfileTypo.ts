import { ProductsTypo } from "./ProductsTypo";

export interface AddressType {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  mobile: string;
  name: string;
}
export interface ProfileTypo {
  id: number;
  isActive: boolean;
  isAdmin: boolean;
  name: string;
  email: string;
  mobile: number;
  gender: string;
  birthDate: string;
  location: AddressType;
  cardDetails: string;
  password: string;
  cart: ProductsTypo[];
  orderedProducts: ProductsTypo[];
}
