import { io } from 'socket.io-client';

export const connectWithSocketIOServer = () => {
  const socket = io('http://localhost:3000', {
    // reconnectionDelayMax: 10000,
    // auth: {
    //   token: '123',
    // },
  });

  socket.on('connect', () => {
    console.log('Socket Client connected to socket server');
  });
};
