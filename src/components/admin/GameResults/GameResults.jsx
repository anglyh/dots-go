// src/components/admin/GameResults/GameResults.jsx
import React from "react";
import "./GameResults.css";

const GameResults = ({ resultados }) => {
  const getPlaceIcon = (index) => {
    if (index === 0) return "🥇"; // Primer lugar
    if (index === 1) return "🥈"; // Segundo lugar
    if (index === 2) return "🥉"; // Tercer lugar
    return "🏅"; // Otros lugares
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`; // Formato "Xm Ys"
  };

  return (
    <div className="game-results-container">
      <h1>Resultados Finales</h1>

      <h2>Tabla de Clasificación</h2>

      <div className="result-list">
        {resultados.map((resultado, index) => (
          <div
            key={index}
            className={`result-row ${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}`}
          >
            <div className="position">
              <span className="position-number">{index + 1}</span>
              <span className="position-icon">{getPlaceIcon(index)}</span>
            </div>
            <div className="result-info">
              <span className="nombre">{resultado.nombre}</span>
            </div>
            <div className="result-time">
              <span className="time-icon">🕒</span>
              <span className="time">{formatTime(resultado.tiempo)}</span>
            </div>
            <div className="result-score">
              <span className="score">{resultado.correctas}/{resultado.total}</span>
              <span className="puntos">{resultado.puntos} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameResults;
