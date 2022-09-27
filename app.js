import express from 'express';
import cors from 'cors';
import { UserController } from './routes/user.js';

export const app = express();
const port = 3333;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
}))

app.get('/', function(req,res) {
  res.send("Hello World!");
});

app.use("/users", UserController);

export const server = app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});