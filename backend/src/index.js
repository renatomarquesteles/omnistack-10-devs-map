import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const http = require('http');

import routes from './routes';
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-ufltw.mongodb.net/devsmap?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
