import { io } from "socket.io-client";


const URL = `${import.meta.env.VITE_SERVER_URL}`; // Cambia el URL si es necesario
export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"], // Forzar WebSocket
});

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
    console.log("Socket conectado");
  } else {
    console.log("Socket ya estaba conectado");
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
    console.log("Socket desconectado");
  }
};
