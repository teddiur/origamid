import React from "react";
import { ProductProvider } from "./ProductContext";
import { Product } from "./Product";

export const UseContext = () => {
  return (
    <ProductProvider>
      <Product />
    </ProductProvider>
  );
};
