import React from "react";
import { Link } from "react-router-dom";
import { useHead } from "../../hooks/useHead";

import { baseURL } from "./Router1";

export const Produto = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  useHead();

  return (
    <div className="product-container flex-row">
      {data?.map((item) => {
        return (
          <figure className="animation-slide-in product-wrapper" key={item.id}>
            <Link to={`produto/${item.id}`}>
              <img
                className="product-image"
                src={item.fotos[0].src}
                alt={item.nome}
              />
            </Link>
            <figcaption>{item.nome}</figcaption>
          </figure>
        );
      })}
    </div>
  );
};
