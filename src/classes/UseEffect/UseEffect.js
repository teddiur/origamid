import React from 'react';
import { Product } from './Product';

export const UseEffect = () => {
  const [preference, setPreference] = React.useState();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const pref = window.localStorage.getItem('produto');
    if (pref) setPreference(pref);
  }, []);

  React.useEffect(() => {
    if (preference) {
      const url = `https://ranekapi.origamid.dev/json/api/produto/${preference}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          window.localStorage.setItem('produto', preference);
        });
    }
  }, [preference]);

  function handleClick(event) {
    const buttonName = event.target.innerText;
    setPreference(buttonName);
  }
  return (
    <>
      <h1>Preferência: {preference}</h1>
      <button style={{ margin: '5px' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '5px' }} onClick={handleClick}>
        smartphone
      </button>
      {data && <Product data={data} />}
    </>
  );
};
