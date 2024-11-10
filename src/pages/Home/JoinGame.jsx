import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { socket, connectSocket } from "../../services/websocket/socketService";
import styles from "./JoinGame.module.css";
import Input from "../../components/common/Input/Input";

export default function JoinGame() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const pin = localStorage.getItem("gamePin");

    if (!username.trim()) {
      setError("Por favor ingresa un nombre");
      return;
    }

    connectSocket();

    socket.emit("join-game", { pin, username }, (response) => {
      if (response.success) {
        console.log("Conectado al juego. Redirigiendo a la pantalla de juego...");
        navigate("/game");
      } else {
        setError(response.error || "Error al unirse al juego");
      }
    });
  };

  return (
    <div className={styles.joinWrapper}>
      <div className={styles.joinContainer}>
        <img src={logo} alt="logo" />
        <h1>Unirse al Juego</h1>
      </div>
      <Input
        placeholder="Tu nombre"
        buttonText="Comenzar"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onSubmit={handleSubmit}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
