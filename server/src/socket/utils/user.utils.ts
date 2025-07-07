export const convertOnlineUsersToArray = (onlineUsers: Object) => {
    const onlineUsersArray = [];

    Object.entries(onlineUsers).forEach([socketId, user] => {
        onlineUsersAraay.push({
            socketId,
            username: user.username,
            coords: user.coords
        })
    }
}