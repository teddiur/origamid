import React from "react";
import { Radio } from "./Radio";

export const Pergunta = ({ data, setPagina, setRespostas }) => {
  const { pergunta, id, options } = data;
  const [value, setValue] = React.useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  function handleClick({ target }) {
    if (value) {
      setPagina((pagina) => pagina + 1);
      setRespostas((prev) => {
        return { ...prev, [id]: value };
      });
      setValue("");
    }
  }

  return (
    <>
      <fieldset>
        <legend>{pergunta}</legend>
        <Radio id={id} options={options} onChange={onChange} />
      </fieldset>
      <button disabled={!value} onClick={handleClick}>
        Próxima
      </button>
    </>
  );
};
