import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.css";

export const Return = ({ currentClass, returnToHome }) => {
  const isHome = useLocation().pathname === "/";
  const showReturn = !isHome || currentClass;

  return (
    <>
      {showReturn && (
        <Link to="/">
          <button onClick={returnToHome}>Voltar</button>
        </Link>
      )}
    </>
  );
};
