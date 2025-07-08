import store from '../store';
import { setOnlineUsers } from '../../pages/MapPage/mapSlice';

export const onlineUsersHandler = (socketId, onlineUsers) => {
  store.dispatch(
    setOnlineUsers(
      onlineUsers.map((user) => {
        if (user.socketId === socketId) {
          user.myself = true;
        }
        return user;
      }),
    ),
  );
};
