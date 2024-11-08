// JoinGame.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket, connectSocket } from '../../services/websocket/socketService';
import styles from "./JoinGame.module.css";
import Button from '../../components/common/Button/Button';

export default function JoinGame() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pin = localStorage.getItem('gamePin'); // Obtiene el pin del localStorage
    
    if (!username.trim()) {
      setError('Por favor ingresa un nombre');
      return;
    }

    // Conectar el socket solo después de que el usuario haga clic en "Comenzar"
    connectSocket();

    // Emitir el evento 'join-game' para unirse a la partida
    socket.emit('join-game', { pin, username }, (response) => {
      if (response.success) {
        console.log('Conectado al juego. Redirigiendo a la pantalla de juego...');
        navigate('/game'); // Redirige inmediatamente a Game.jsx después de unirse con éxito
      } else {
        setError(response.error || 'Error al unirse al juego');
      }
    });
  };

  return (
    <div className={styles.joinGameWrapper}>
      <h2>Ingresa tu nombre</h2>
      <form onSubmit={handleSubmit} className={styles.joinGameForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tu nombre"
          className={styles.customInput}
        />
        <Button type="submit">Comenzar</Button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
