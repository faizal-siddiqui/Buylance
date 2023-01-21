import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductsTypo } from "../../constants/ProductsTypo";

type UpdateProductType = {
  rating?: {
    star: number;
    count: number;
  };
};

type ParamsObjType = {
  method: string;
  url: string;
  data?: UpdateProductType;
};

export const useSingleProductApi = (): [
  loading: boolean,
  error: boolean,
  data: ProductsTypo | undefined,
  apifn: (paramsObj: ParamsObjType) => void
] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ProductsTypo | undefined>();

  const apifn = async (paramsObj: ParamsObjType) => {
    setLoading(true);
    setError(false);
    try {
      const response: AxiosResponse<ProductsTypo> = await axios(paramsObj);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return [loading, error, data, apifn];
};
