import axios, { AxiosResponse } from "axios";
import { ProductsTypo } from "../../constants/ProductsTypo";
import { ProfileTypo } from "../../constants/ProfileTypo";

interface Params {
  method: string;
  url: string;
  data?: any;
}

type Res = ProductsTypo[] | ProfileTypo | ProfileTypo[] | string;

export const apiCall =async (params: Params) => {
  const response: AxiosResponse<Res> = await axios({ ...params });
  return response.data;
};
