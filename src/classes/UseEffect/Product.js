import React from "react";

export const Product = ({ product }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${product}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        window.localStorage.setItem("produto", product);
      });

    return () => {
      setData(null);
    };
  }, [product]);
  return (
    <div>
      {data && (
        <>
          <p>{data.nome}</p>
          <p>R$ {data.preco}</p>
          {data.fotos?.map((foto) => (
            <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
          ))}
        </>
      )}
    </div>
  );
};
