import { io, Socket } from 'socket.io-client';

let socket = null;
export const connectWithSocketIOServer = () => {
  socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('Socket Client connected to socket server');
  });

  socket.on('online-users', (onlineUsers) => {
    console.log(onlineUsers);
  });
};

export const login = (data) => {
  socket.emit('user-login', data);
};
