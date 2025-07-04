import { Socket } from 'socket.io';

interface User {
  username: string;
  coords: {
    lat: number;
    lng: number;
  };
}

const onlineUsers: Record<string, User> = {};

export const disconnectEventHandler = (socketId: string) => {
  console.log(`User disconnected of the id: ${socketId}`);
  removeOnlineUser(socketId); // clean up user
};

const removeOnlineUser = (socketId: string) => {
  if (onlineUsers[socketId]) delete onlineUsers[socketId];

  console.log(onlineUsers);
};

export const loginEventHandler = (socket: Socket, data: User) => {
  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };
  console.log(`User logged in: ${data.username}`, onlineUsers);
  console.log('Online users: ', onlineUsers);
};
