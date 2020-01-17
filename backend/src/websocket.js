import socketio from 'socket.io';

import parseStringAsArray from './utils/parseStringAsArray';
import calculateDistance from './utils//calculateDistance';

let io;
const connections = [];

exports.setupWebsocket = server => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connnection => {
    return (
      calculateDistance(coordinates, connnection.coordinates) < 10 &&
      connnection.techs.some(tech => techs.includes(tech))
    );
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};
