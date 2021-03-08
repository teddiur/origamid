import React from "react";
import { useHead } from "../../hooks/useHead";

export const Contato = () => {
  useHead("Contato");
  return (
    <div className="flex-row animation-slide-in">
      <div className="half-page">
        <img
          className="product-photo"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-2.jpg"
          alt="era pra ser uma imagem bonita"
        />
      </div>
      <div className="half-page">
        <h2>Entre em contato</h2>
        <p>andre@origamid.com</p>
        <p>99999-9999</p>
        <p>Rua Ali Perto, 999</p>
      </div>
    </div>
  );
};
