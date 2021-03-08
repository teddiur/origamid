import React from "react";
import * as C from "./classes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Return } from "./Return";

function App() {
  const [currentClass, setCurrentClass] = React.useState("");

  const desafiosRoutes = [
    {
      label: "Desafio Form",
      path: "form",
      element: <C.DesafioForm />,
    },
    {
      label: "Desafio Router 1",
      path: "router1/*",
      element: <C.Router1 />,
    },
  ];

  function returnToHome() {
    setCurrentClass("");
  }

  return (
    <BrowserRouter>
      <Return currentClass={currentClass} returnToHome={returnToHome} />

      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentClass={currentClass}
              setCurrentClass={setCurrentClass}
            />
          }
        />
        {desafiosRoutes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
