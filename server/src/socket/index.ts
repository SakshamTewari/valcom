import { Server, Socket } from 'socket.io';
import {
  disconnectEventHandler,
  loginEventHandler,
} from './handlers/user.handler';

export const setupSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected : ${socket.id}`);
    console.log('📨 Handshake headers:', socket.handshake.headers);
    console.log('🧠 User-Agent:', socket.handshake.headers['user-agent']);

    socket.on('user-login', (data) => loginEventHandler(socket, data));

    socket.on('disconnect', () => {
      disconnectEventHandler(socket.id);
    });
  });
};
