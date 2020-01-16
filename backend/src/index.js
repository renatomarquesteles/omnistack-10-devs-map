import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

const app = express();

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

app.listen(3333);
