import React from 'react';
import styles from "./GameMonitor.module.css";

export default function GameMonitor({ nombre, tiempo, codigo, onIniciarJuego }) {
  return (
    <div>
      {/* Contenedor de información del juego en la parte superior ocupando todo el ancho */}
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

      {/* Nueva sección de alumnos conectados ocupando toda la pantalla */}
      <div className={styles.connectedStudentsContainer}>
        <h3>Usuarios conectados</h3>
        <div className={styles.studentsList}>
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className={styles.student}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
