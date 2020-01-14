import express from 'express';
import mongoose from 'mongoose';
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

app.use(express.json());
app.use(routes);

app.listen(3333);
