import express from 'express';
import bodyParser from 'body-parser';
import User from './app/controllers/User';
import path from 'path';

const app = express();
const port = 3000;

module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '')));

app.use('/user', User);

console.log(`Servidor rodando no link http://localhost:${port}`);

app.listen(port);
