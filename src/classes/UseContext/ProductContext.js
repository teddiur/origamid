import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = React.useState();

  const cleanData = () => {
    setData();
  };

  const fetchData = () => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const value = {
    cleanData,
    fetchData,
    data,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
