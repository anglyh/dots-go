import React from "react";
import styles from "./GameResults.module.css"

export default function GameResults ({ resultados }) {
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
    <div className={styles.gameResultsContainer}>
      <h1>Resultados Finales</h1>

      <h2>Tabla de Clasificación</h2>

      <div className={styles.resultList}>
        {resultados.map((resultado, index) => (
          <div
            key={index}
            className={`${styles.resultRow} ${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}`}
          >
            <div className={styles.position}>
              <span className={styles.positionNumber}>{index + 1}</span>
              <span className={styles.positionIcon}>{getPlaceIcon(index)}</span>
            </div>
            <div className={styles.resultInfo}>
              <span className={styles.nombre}>{resultado.nombre}</span>
            </div>
            <div className={styles.resultTime}>
              <span className={styles.timeIcon}>🕒</span>
              <span className={styles.time}>{formatTime(resultado.tiempo)}</span>
            </div>
            <div className={styles.resultScore}>
              <span className={styles.score}>{resultado.correctas}/{resultado.total}</span>
              <span className={styles.puntos}>{resultado.puntos} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

