import React from 'react';
import { useLocation } from 'react-router-dom';

export default function GameResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Valor predeterminado para evitar errores

  if (!Array.isArray(results)) {
    console.error("Error: results no es un array", results); // Para depuración
    return <div>Error al cargar los resultados. Por favor, inténtelo de nuevo.</div>;
  }

  return (
    <div>
      <h1>Resultados Finales</h1>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Puntuación</th>
            <th>Respuestas Correctas</th>
            <th>Preguntas Totales</th>
          </tr>
        </thead>
        <tbody>
          {results.map((player, index) => (
            <tr key={index}>
              <td>{player.username}</td>
              <td>{player.score}</td>
              <td>{player.correctAnswers}</td>
              <td>{player.totalQuestions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
