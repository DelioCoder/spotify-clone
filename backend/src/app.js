const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const loginRoute = require('./routes/Login');
const refreshRoute = require('./routes/Refresh');

app.use('/api/login', loginRoute);
app.use('/api/refresh', refreshRoute);

//Port

app.set('port', process.env.PORT || 4000);

module.exports = app;