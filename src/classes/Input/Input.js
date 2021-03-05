import React from "react";
import { InputItem } from "./InputItem";

const inputObject = [
  { label: "Nome", name: "nome", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Senha", name: "senha", type: "password" },
  { label: "CEP", name: "cep", type: "number" },
  { label: "Rua", name: "rua", type: "text" },
  { label: "Número", name: "numero", type: "number" },
  { label: "Bairro", name: "bairro", type: "text" },
  { label: "Cidade", name: "cidade", type: "text" },
  { label: "Estado", name: "estado", type: "text" },
];
export const Input = () => {
  const [form, setForm] = React.useState(() => {
    const init = {};
    inputObject.forEach((item) => (init[item.name] = ""));
  });
  const [showSucess, setShowSucess] = React.useState({ status: false });

  const messageObject = {
    sucess: "Formulário Enviado",
    error: "Houve um erro, formulário não enviado",
  };

  const message = showSucess.status && messageObject[showSucess.message];

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      if (response.status !== 200)
        setShowSucess({ status: true, message: "error" });
      else setShowSucess({ status: true, message: "sucess" });
    } catch {}
  }
  return (
    <form onSubmit={handleSubmit}>
      {inputObject.map(({ label, name, type }) => {
        return (
          <InputItem
            key={`${name}-${type}`}
            label={label}
            name={name}
            type={type}
            setForm={setForm}
          />
        );
      })}

      {showSucess.status && <div>{message}</div>}
      <button>Enviar</button>
    </form>
  );
};
