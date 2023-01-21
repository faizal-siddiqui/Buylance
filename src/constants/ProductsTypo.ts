import React from "react";

// Products Interface
export interface ProductsTypo {
  delivered?: boolean;
  brand: string;
  name: string;
  rating: {
    star: number;
    count: number;
  }; 
  price: number;
  mrp: number;
  discount: number;
  sizes: string;
  qty: number;
  productDetails: string;
  size: string;
  material: string;
  category?: string;
  type: string;
  specification: {
    fabric: string;
    fit: string;
    length: string;
    mainTrend: string;
  };
  images: string[];
  reviews: string[];
  id: number;
}

export interface UpdateProductsTypo {
  carause?: false;
  brand?: string;
  name?: string;
  rating?: {
    star?: number;
    count?: number;
  };
  price?: number;
  mrp?: number;
  discount?: number;
  sizes?: string;
  qty?: number;
  productDetails?: string;
  size?: string;
  material?: string;
  category?: string;
  type?: string;
  specification?: {
    fabric?: string;
    fit?: string;
    length?: string;
    mainTrend?: string;
  };
  images?: string[];
  reviews?: string[];
}
