import React from "react";
import { useParams } from "react-router";

import { Loading } from "../../components/Loading/Loading";
import { baseURL } from "./Router1";

export const ProdutoDetalhe = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(baseURL + `/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTimeout(() => setLoading(false), 200);
      });
  }, [params.id]);

  React.useEffect(() => {
    if (data) document.title = `Origamid | ${data.nome}`;
  }, [data]);

  return (
    <div className="flex-row animation-slide-in">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <>
              <div className="half-page flex-column">
                {data.fotos?.map((foto) => (
                  <img
                    key={foto.titulo}
                    className="product-photo"
                    src={foto.src}
                    alt={foto.titulo}
                  />
                ))}
              </div>
              <div className="flex-column product-description half-page">
                <h2>{data?.nome}</h2>
                <p className="product-price">{`R$ ${data?.preco}`}</p>
                <p className="product-text">{data?.descricao}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
