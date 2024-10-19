import React, { useState } from "react";
import GameCreator from "../../components/admin/GameCreator/GameCreator";
import GameMonitor from "../../components/admin/GameMonitor/GameMonitor";
import GameResults from "../../components/admin/GameResults/GameResults";

export default function Admin() {
  const [juegoCreado, setJuegoCreado] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [nombre, setNombre] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [codigo, setCodigo] = useState("");

  const resultados = [
    { nombre: "Ana García", puntos: 1200, correctas: 15, total: 20, tiempo: 180 },
    { nombre: "Carlos López", puntos: 1050, correctas: 14, total: 20, tiempo: 175 },
    { nombre: "María Fernández", puntos: 980, correctas: 13, total: 20, tiempo: 200 },
    { nombre: "Luis Pérez", puntos: 870, correctas: 12, total: 20, tiempo: 220 },
    { nombre: "Sofía Torres", puntos: 760, correctas: 10, total: 20, tiempo: 240 },
  ];

  const generarCodigoAleatorio = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleCrearJuego = (nombreJuego, tiempoJuego) => {
    setNombre(nombreJuego);
    setTiempo(tiempoJuego);
    setCodigo(generarCodigoAleatorio());
    setJuegoCreado(true);
  };

  const handleIniciarJuego = () => {
    setMostrarResultados(true); // Cambia la vista a GameResults.
  };

  return (
    <div>
      {!juegoCreado && !mostrarResultados ? (
        <GameCreator onCrearJuego={handleCrearJuego} />
      ) : juegoCreado && !mostrarResultados ? (
        <GameMonitor
          nombre={nombre}
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
