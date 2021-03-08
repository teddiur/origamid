import React from "react";
import { Product } from "./Product";

export const UseEffect = () => {
  const [preference, setPreference] = React.useState();

  React.useEffect(() => {
    const pref = window.localStorage.getItem("produto");
    setPreference(pref);
  }, []);

  function handleClick(event) {
    const buttonName = event.target.innerText;
    const pref = window.localStorage.getItem("produto");
    if (pref !== buttonName) setPreference(buttonName);
  }
  return (
    <>
      <h1>Preferência: {preference}</h1>
      <button style={{ margin: "5px" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "5px" }} onClick={handleClick}>
        smartphone
      </button>
      <Product product={preference} />
    </>
  );
};
