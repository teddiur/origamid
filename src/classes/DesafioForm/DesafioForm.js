import React from "react";
import { Pergunta } from "./Pergunta";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

export const DesafioForm = () => {
  const [pagina, setPagina] = React.useState(0);
  const [respostas, setRespostas] = React.useState({});

  function calculateRightAnswers() {
    const resultado = perguntas.reduce((acc, cur) => {
      const { id } = cur;
      const resposta = respostas[id];
      if (resposta === cur.resposta) {
        return acc + 1;
      } else return acc;
    }, 0);
    return resultado;
  }

  return (
    <>
      {pagina === perguntas.length ? (
        <p>
          Você acertou {calculateRightAnswers()}/{perguntas.length}
        </p>
      ) : (
        <Pergunta
          key={perguntas[pagina].id}
          data={perguntas[pagina]}
          setPagina={setPagina}
          setRespostas={setRespostas}
        />
      )}
    </>
  );
};
