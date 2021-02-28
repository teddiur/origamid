import React from 'react';

export const Product = ({ data }) => {
  return (
    <div>
      <p>{data.nome}</p>
      <p>R$ {data.preco}</p>
      {data.fotos.map((foto) => (
        <img key={foto.titulo} src={foto.src} alt={foto.titulo} />
      ))}
    </div>
  );
};
