import React from "react";

function Encuesta({ pregunta, opciones }) {
  return (
    <div>
      <h2>{pregunta}</h2>
      <ul>
        {opciones.map((opcion) => (
          <li key={opcion}>{opcion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Encuesta;
