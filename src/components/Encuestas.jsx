import React from "react";
import Encuesta from "./Encuesta";

function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li>
            <Encuesta
              pregunta={encuesta.pregunta}
              opciones={encuesta.opciones}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Encuestas;
