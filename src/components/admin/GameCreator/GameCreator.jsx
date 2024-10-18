// src/components/admin/GameCreator/GameCreator.jsx
import React, { useState } from "react";
import "./GameCreator.css";

const GameCreator = ({ onCrearJuego }) => {
  const [nombreJuego, setNombreJuego] = useState("");
  const [tiempoJuego, setTiempoJuego] = useState("");

  const handleClick = () => {
    if (nombreJuego && tiempoJuego) {
      onCrearJuego(nombreJuego, tiempoJuego);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="game-creator-container">
      <h2>Crear Nuevo Juego</h2>
      <p>Completa los detalles para generar tu juego</p>

      <label>Nombre del Juego:</label>
      <input
        type="text"
        placeholder="Ingrese el Nombre del Juego"
        value={nombreJuego}
        onChange={(e) => setNombreJuego(e.target.value)}
      />

      <label>Tiempo:</label>
      <input
        type="number"
        placeholder="Establecer Tiempo Límite"
        value={tiempoJuego}
        onChange={(e) => setTiempoJuego(e.target.value)}
      />

      <button onClick={handleClick}>Crear Juego</button>
    </div>
  );
};

export default GameCreator;
