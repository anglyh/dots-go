import React, { useState, useEffect } from "react";
import Card from "../../components/game/Card/Card";
import styles from "./Game.module.css";
import Board from "../../components/game/Board/Board";
import PictogramList from "../../components/game/PictogramList/PictogramList";
import Number from "../../components/game/Number/Number";
import Button from "../../components/common/Button/Button";
import { socket } from "../../services/websocket/socketService";

export default function Game() {
  const COLORS = ["white", "red", "black", "yellow", "blue", "green", "orange"];
  const NUMBERS = [
    1, 2.1, 2.2, 2.3, 3, 4.1, 4.2, 4.3, 5.1, 5.2,
    6.1, 6.2, 7, 8, 9,
  ];

  const [topPictogram, setTopPictogram] = useState(null);
  const [centerCards, setCenterCards] = useState([]);
  const [bottomNumber, setBottomNumber] = useState(null);

  const [question, setQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [nextQuestionTime, setNextQuestionTime] = useState(null);

  const [message, setMessage] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false); 

  useEffect(() => {
    const pin = localStorage.getItem("gamePin");

    // Solicitar la pregunta actual al iniciar
    socket.emit("request-current-question", { pin }, (response) => {
      if (response.success) {
        setQuestion(response.question);
        setTimeLeft(response.timeLeft);
      } else {
        console.log(response.error || "Esperando a que el juego inicie");
      }
    });

    // Escuchar el evento cuando inicia una nueva pregunta
    socket.on("game-started", ({ question, timeLimit, nextQuestionTime }) => {
      setQuestion(question);
      setNextQuestionTime(nextQuestionTime);
      setHasAnswered(false);
      setMessage("");
      resetBoard(); // Limpiar el tablero al iniciar una nueva pregunta
    });

    // Escuchar el evento cuando alguien responde
    socket.on("player-answered", ({ playerId, isCorrect }) => {
      if (socket.id === playerId) {
        setMessage(isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta.");
      }
    });

    return () => {
      socket.off("game-started");
      socket.off("player-answered");
    };
  }, []);

  // Temporizador basado en la hora de la próxima pregunta
  useEffect(() => {
    if (!nextQuestionTime) return;

    const timer = setInterval(() => {
      const remainingTime = Math.max(0, Math.floor((nextQuestionTime - Date.now()) / 1000));
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timer);
        if (!hasAnswered) autoSubmitNullAnswer(); // Enviar respuesta nula si el tiempo se agota
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextQuestionTime, hasAnswered]);

  // Función para limpiar el tablero
  const resetBoard = () => {
    setTopPictogram(null);
    setCenterCards([]);
    setBottomNumber(null);
  };

  // Enviar respuesta nula si el tiempo se agota
  const autoSubmitNullAnswer = () => {
    const answer = {
      pictogram: null,
      colors: [],
      number: null,
    };
    const pin = localStorage.getItem("gamePin");

    socket.emit("submit-answer", { pin, answer, responseTime: 0 }, (response) => {
      setMessage("Tiempo agotado. Respuesta incorrecta.");
      setHasAnswered(true); // Marcar como respondido para evitar nuevos envíos
    });
  };

  const movePictogramToTop = (pictogram) => setTopPictogram(pictogram);
  const removePictogram = () => setTopPictogram(null);

  const moveCardToCenter = (color) => {
    if (centerCards.length < 3 && !centerCards.includes(color)) {
      setCenterCards([...centerCards, color]);
    }
  };
  const removeCardFromCenter = (index) => setCenterCards(centerCards.filter((_, i) => i !== index));
  const moveNumberToBottom = (number) => setBottomNumber(number);
  const removeNumberFromBottom = () => setBottomNumber(null);

  const confirmResults = () => {
    if (hasAnswered) return;

    const responseTime = timeLeft;
    const answer = {
      pictogram: topPictogram ? topPictogram.id : null,
      colors: centerCards,
      number: bottomNumber,
    };
    const pin = localStorage.getItem("gamePin");

    socket.emit("submit-answer", { pin, answer, responseTime }, (response) => {
      if (response.success) {
        setMessage(response.isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta.");
        setHasAnswered(true);
      }
    });
  };

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.gameContainer}>
        <div className={styles.questionContainer}>
          <h2>{question ? question.title : "Esperando pregunta..."}</h2>
          {timeLeft !== null && <p>Tiempo restante: {timeLeft} segundos</p>}
          <p>{message}</p>
        </div>

        <PictogramList
          onPictogramSelect={movePictogramToTop}
          selectedPictogram={topPictogram}
        />
        <Board
          topPictogram={topPictogram}
          onPictogramRemove={removePictogram}
          centerCards={centerCards}
          onCardRemove={removeCardFromCenter}
          bottomNumber={bottomNumber}
          onNumberRemove={removeNumberFromBottom}
        />

        <div className={styles.numbersContainer}>
          {NUMBERS.map((number, index) => (
            <Number
              key={index}
              number={number}
              onClick={() => moveNumberToBottom(number)}
              disabled={bottomNumber !== null}
            />
          ))}
        </div>
      </div>

      <div className={styles.acceptButton}>
        <Button
          onClick={confirmResults}
          disabled={
            !topPictogram || centerCards.length === 0 || bottomNumber === null || hasAnswered
          }
        >
          Confirmar
        </Button>
      </div>

      <div className={styles.cardContainer}>
        {COLORS.map((color, index) => (
          <Card
            key={index}
            cardColor={color}
            onClick={() => moveCardToCenter(color)}
            inHand={true}
          />
        ))}
      </div>
    </div>
  );
}
