import { Coordinates } from './coordinates.interface';

export interface User {
  username: string;
  coords: Coordinates;
}

export interface onlineUsers {
  socketId: string;
  user: User;
}
