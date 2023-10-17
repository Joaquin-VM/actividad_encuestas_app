import React, { useState } from "react";
import "./App.css";

// Componentes de las páginas
import Encuestas from "./components/Encuestas";
function App() {
  const encuestasEjemplo = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Azul", "Verde"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Pizza", "Hamburguesa", "Sushi"],
    },
  ];

  // Estado para rastrear las encuestas
  const [encuestas, setEncuestas] = useState(encuestasEjemplo);

  const modificarEncuestas = () => {
    setEncuestas([
      {
        id: 1,
        pregunta: "¿Cuál es tu sabor de helado favorito?",
        opciones: ["Chocolate", "Menta Granizada", "Frutilla"],
      },
      {
        id: 2,
        pregunta: "¿Cuál es tu deporte favorito?",
        opciones: ["Futbol", "Basquet", "Tenis"],
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      {/* Contenido de las páginas */}
      <Encuestas encuestas={encuestas} />
      <button onClick={modificarEncuestas}>Cambiar Encuestas</button>
    </div>
  );
}

export default App;
