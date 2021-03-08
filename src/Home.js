import React from "react";
import * as C from "./classes";
import { Link } from "react-router-dom";

export const Home = ({ currentClass, setCurrentClass }) => {
  const possibleClass = {
    useEffect: <C.UseEffect />,
    useContext: <C.UseContext />,
    Input: <C.Input />,
  };

  const desafiosRoutes = [
    {
      label: "Desafio Form",
      path: "form",
      element: <C.DesafioForm />,
    },
    {
      label: "Desafio Router 1",
      path: "router1",
      element: <C.Router1 />,
    },
  ];

  return (
    <div>
      {currentClass ? (
        possibleClass[currentClass]
      ) : (
        <>
          <p>Aulas</p>
          {Object.keys(possibleClass).map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrentClass(item);
              }}
            >
              {item}
            </button>
          ))}
        </>
      )}
      {!currentClass && (
        <>
          <p>Desafios</p>
          {desafiosRoutes.map((route) => {
            return (
              <Link to={route.path}>
                <button key={route.path}>{route.label}</button>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};
