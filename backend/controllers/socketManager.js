import { Server } from "socket.io";

export const connectToSever = (server) => {
  const io = new Server(server);
  return io;
};
