import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { fileURLToPath } from 'url'

import {notFound, serverError} from './routes/error.js'
import boardRouter from './routes/board.js'
import usersRouter from './routes/users.js'
import logsRouter from './routes/logs.js'
import terminalsRouter from './routes/terminals.js'
import terminalGrantRouter from './routes/terminal_grant.js'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/board', boardRouter);
app.use('/users', usersRouter);
app.use('/logs', logsRouter);
app.use('/terminals', terminalsRouter);
app.use('/terminal-grant', terminalGrantRouter);

app.use(notFound);
app.use(serverError);

export default app;
