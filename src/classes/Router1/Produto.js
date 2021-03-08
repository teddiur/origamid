import React from "react";
import { Link } from "react-router-dom";

import { useHead } from "../../hooks/useHead";

import { Loading } from "../../components/Loading/Loading";
import { baseURL } from "./Router1";

export const Produto = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);
  useHead();

  return (
    <div className="product-container flex-row">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data?.map((item) => {
            return (
              <figure
                className="animation-slide-in product-wrapper"
                key={item.id}
              >
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
        </>
      )}
    </div>
  );
};
