const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server);
  const state = {};
  io.on('connection', (socket) => {
    socket.on('location', (location) => {
      state[socket.id] = location;
    });
    socket.on('disconnect', () => {
      console.log('A user has disconnected', socket.id);
      delete state[socket.id];
    });
  });
  setInterval(() => {
    io.emit('state', state);
  }, 500);
};
