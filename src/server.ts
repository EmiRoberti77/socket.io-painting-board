import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
const port = 8000;
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('draw', (message) => {
    console.log(message);
    socket.broadcast.emit('draw', message);
  });
  socket.on('disconnect', (message) => {
    console.log(message);
  });
});

server.listen(port, () => {
  console.log('server started');
});
