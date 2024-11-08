// Admin.js
import React, { useState, useEffect } from "react";
import { socket, connectSocket, disconnectSocket } from "../../services/websocket/socketService";
import GameCreator from "../../components/admin/GameCreator/GameCreator";
import GameMonitor from "../../components/admin/GameMonitor/GameMonitor";
import GameResults from "../../components/admin/GameResults/GameResults";

export default function Admin() {
  const [juegoCreado, setJuegoCreado] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [tiempo, setTiempo] = useState("");
  const [codigo, setCodigo] = useState("");

  const resultados = [
    { nombre: "Ana García", puntos: 1200, correctas: 15, total: 20, tiempo: 180 },
    { nombre: "Carlos López", puntos: 1050, correctas: 14, total: 20, tiempo: 175 },
    { nombre: "María Fernández", puntos: 980, correctas: 13, total: 20, tiempo: 200 },
    { nombre: "Luis Pérez", puntos: 870, correctas: 12, total: 20, tiempo: 220 },
    { nombre: "Sofía Torres", puntos: 760, correctas: 10, total: 20, tiempo: 240 },
  ];

  useEffect(() => {
    connectSocket(); // Conecta el socket al montar el componente

    // Limpia y desconecta el socket al desmontar el componente
    return () => {
      disconnectSocket();
    };
  }, []);

  const handleCrearJuego = (tiempoJuego) => {
    // Emitimos el evento 'create-game' al backend con el tiempo en segundos
    socket.emit("create-game", { timeLimit: parseInt(tiempoJuego) }, (response) => {
      if (response.success) {
        setCodigo(response.pin);
        setTiempo(tiempoJuego);  // Guardamos el tiempo en segundos
        setJuegoCreado(true);
      } else {
        alert(response.error || "Error al crear el juego");
      }
    });
  };

  const handleIniciarJuego = () => {
    // Emitir el evento `start-game` al backend
    socket.emit("start-game", { pin: codigo }, (response) => {
      if (response.success) {
        setMostrarResultados(true);
      } else {
        alert(response.error || "Error al iniciar el juego");
      }
    });
  };

  return (
    <div>
      {!juegoCreado && !mostrarResultados ? (
        <GameCreator onCrearJuego={handleCrearJuego} />
      ) : juegoCreado && !mostrarResultados ? (
        <GameMonitor
          tiempo={tiempo}
          codigo={codigo}
          onIniciarJuego={handleIniciarJuego}
        />
      ) : (
        <GameResults resultados={resultados} />
      )}
    </div>
  );
}
