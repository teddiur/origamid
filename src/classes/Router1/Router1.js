import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Produto } from "./Produto";
import { ProdutoDetalhe } from "./ProdutoDetalhe";
import { Contato } from "./Contato";

import "./Router1.css";

export const Router1 = () => {
  return (
    <div className="content-container">
      <Link to="">
        <button className="router1-button">Produtos</button>
      </Link>
      <Link to="contato">
        <button className="router1-button">Contato</button>
      </Link>
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<ProdutoDetalhe />} />
      </Routes>
    </div>
  );
};

const baseURL = "https://ranekapi.origamid.dev/json/api/produto";
export { baseURL };
