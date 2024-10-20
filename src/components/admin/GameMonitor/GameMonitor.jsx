import React from 'react';
import styles from "./GameMonitor.module.css"

export default function GameMonitor ({ nombre, tiempo, codigo, onIniciarJuego }) {
  return (
    <div className={styles.gameMonitorContainer}>
      <h2>¡Juego Creado!</h2>
      <div className={styles.gameInfo}>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Tiempo:</strong> {tiempo} minutos</p>
      </div>
      <div className={styles.gameCode}>
        <p>Código de Juego</p>
        <span>{codigo}</span>
      </div>
      <button className={styles.buttonForm} onClick={onIniciarJuego}>Iniciar Juego</button>
    </div>
  );
};

