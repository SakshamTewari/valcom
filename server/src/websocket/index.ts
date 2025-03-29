import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ host: '0.0.0.0', port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on('connection', function (socket) {
  socket.send('user connected');

  socket.on('message', (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);

    if (parsedMessage.type === 'join') {
      allSockets.push({
        socket,
        room: parsedMessage.payload.room,
      });
    }
    if (parsedMessage.type === 'chat') {
      const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room;
      // send message to everyone in the room
      allSockets
        .filter((x) => x.room === currentUserRoom)
        .forEach((x) => {
          x.socket.send(parsedMessage.payload.message);
        });
      // for(let i=0; i<allSockets.length; i++){
      //   if(allSockets[i].room === currentUserRoom){

      //     allSockets[i].socket.send(parsedMessage.payload.message);
      //   }
      // }
    }
    // allSockets.forEach((socket) => {
    //   socket.send('Sent from the server:' + message.toString());
    // });
  });

  socket.on('close', () => {
    // allSockets = allSockets.filter((x) => x !== socket);
  });
});
