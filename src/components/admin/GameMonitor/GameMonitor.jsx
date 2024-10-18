// src/components/admin/GameMonitor/GameMonitor.jsx
import React from 'react';
import './GameMonitor.css'; // Importa el CSS para los estilos.

const GameMonitor = ({ nombre, tiempo, codigo, onIniciarJuego }) => {
  return (
    <div className="game-monitor-container">
      <h2>¡Juego Creado!</h2>
      <div className="game-info">
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Tiempo:</strong> {tiempo} minutos</p>
      </div>
      <div className="game-code">
        <p>Código de Juego</p>
        <span>{codigo}</span>
      </div>
      <button onClick={onIniciarJuego}>Iniciar Juego</button>
    </div>
  );
};

export default GameMonitor;
