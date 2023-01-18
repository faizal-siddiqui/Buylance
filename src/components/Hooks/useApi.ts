import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductsTypo } from "../../constants/ProductsTypo";

type ParamsObjType = {
  method: string;
  url: string;
  data?: [] | ProductsTypo[];
};

export const useApi = (): [
  loading: boolean,
  error: boolean,
  data: ProductsTypo[],
  apifn: (paramsObj: ParamsObjType) => void
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ProductsTypo[]>([]);

  const apifn = async (paramsObj: ParamsObjType) => {
    setLoading(true);
    setError(false);
    try {
      const response: AxiosResponse<ProductsTypo[]> = await axios(paramsObj);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return [loading, error, data, apifn];
};
