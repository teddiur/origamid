import React from "react";
import { ProductContext } from "./ProductContext";

export const Product = () => {
  const { data, fetchData, cleanData } = React.useContext(ProductContext);
  return (
    <div>
      <button onClick={() => fetchData()}>Fetch</button>
      <button onClick={() => cleanData()}>Clean</button>
      {data && data.map((item) => <p key={item.id}>{item.id}</p>)}
    </div>
  );
};
