import { Server, Socket } from 'socket.io';
import { disconnectEventHandler } from './handlers/user.handler';

export const setupSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected : ${socket.id}`);

    socket.on('disconnect', () => {
      disconnectEventHandler(socket.id);
    });
  });
};
