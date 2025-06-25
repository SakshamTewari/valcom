import http from 'http';
import { Server } from 'socket.io';
import app from './app';
import { setupSocket } from './socket/index';

const PORT = process.env.PORT || 3000;

export const createServer = () => {
  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  setupSocket(io);

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
