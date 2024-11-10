// GameMonitor.js
import React from "react";
import styles from "./GameMonitor.module.css";

export default function GameMonitor({ tiempo, codigo, onIniciarJuego, esperandoResultados }) {
  return (
    <div>
      <div className={styles.gameMonitorContainer}>
        <h2>¡Juego Creado!</h2>
        <div className={styles.gameInfo}>
          <p><strong>Tiempo:</strong> {tiempo} minutos</p>
        </div>
        <div className={styles.gameCode}>
          <p>Código de Juego</p>
          <span>{codigo}</span>
        </div>
        <button className={styles.buttonForm} onClick={onIniciarJuego}>Iniciar Juego</button>
      </div>

      <div className={styles.connectedStudentsContainer}>
        <h3>Usuarios conectados</h3>
        <div className={styles.studentsList}>
          {/* Aquí se pueden listar los jugadores conectados si tienes esa funcionalidad */}
        </div>
      </div>

      {esperandoResultados && (
        <div className={styles.waitingMessage}>
          <p>Esperando a que finalice la partida y se generen los resultados...</p>
        </div>
      )}
    </div>
  );
}
