// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { socket } from '../../services/websocket/socketService';
// import styles from "./JoinGame.module.css";
// import Button from '../../components/common/Button/Button';

// export default function JoinGame() {
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const pin = localStorage.getItem('gamePin');
    
//     if (!username.trim()) {
//       setError('Por favor ingresa un nombre');
//       return;
//     }

//     socket.emit('join-game', { pin, username }, (response) => {
//       if (response.success) {
//         navigate('/game');
//       } else {
//         setError(response.error || 'Error al unirse al juego');
//       }
//     });
//   };

//   return (
//     <div className={styles.joinGameWrapper}>
//       <h2>Ingresa tu nombre</h2>
//       <form onSubmit={handleSubmit} className={styles.joinGameForm}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Tu nombre"
//           className={styles.customInput}
//         />
//         <Button type="submit">Comenzar</Button>
//       </form>
//       {error && <p className={styles.error}>{error}</p>}
//     </div>
//   );
// }