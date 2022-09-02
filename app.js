let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let signinRouter = require('./routes/auth/signin');
let signupRouter = require('./routes/auth/signup');
let resetRouter = require('./routes/auth/reset');
let forgotRouter = require('./routes/auth/forgot');

let blogRouter = require('./routes/blog');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/reset', resetRouter);
app.use('/forgot', forgotRouter);
app.use('/blog', blogRouter);

module.exports = app;
