import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000'; // Ajusta según tu configuración de backend

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ['websocket']
});