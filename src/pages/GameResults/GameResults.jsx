import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./GameResults.module.css";

export default function GameResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  const sortedResults = [...results].sort((a, b) => b.score - a.score);

  return (
    <div className={styles.gameResultsContainer}>
      <h1>Resultados Finales</h1>
      <div className={styles.resultList}>
        {sortedResults.map((player, index) => (
          <div key={index} className={styles.resultRow}>
            <div className={styles.position}>
              <span className={styles.resultNumber}>{index + 1}</span>
              <span className={styles.positionIcon}>🏆</span>
            </div>
            <div className={styles.resultInfo}>
              <span className={styles.name}>{player.username}</span>
            </div>
            <div className={styles.resultScore}>
              <span className={styles.score}>
                Correctas: {player.correctAnswers} / {player.totalQuestions}
              </span>
            </div>
            <div className={styles.puntos}>
              {player.score} pts
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
