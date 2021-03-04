import React from "react";
import * as C from "./classes";

function App() {
  const [currentClass, setCurrentClass] = React.useState();
  const possibleClass = {
    useEffect: <C.UseEffect />,
    useContext: <C.UseContext />,
    Input: <C.Input />,
    "Desáfio Form": <C.DesafioForm />,
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setCurrentClass(null);
        }}
      >
        Voltar
      </button>
      <hr />
      {currentClass
        ? possibleClass[currentClass]
        : Object.keys(possibleClass).map((item) => (
            <button
              onClick={() => {
                setCurrentClass(item);
              }}
            >
              {item}
            </button>
          ))}
    </div>
  );
}

export default App;
