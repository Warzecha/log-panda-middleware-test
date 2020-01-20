const express = require('express');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const logPanda = require('./middleware/panda');


const app = express();
const port = 5000;

app.use(express.json());
app.use(logger('dev'));
app.use(logPanda)

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));