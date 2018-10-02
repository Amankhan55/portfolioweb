"use strict"
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routers/web');
const UserRouter = require('./routers/UserRouters');
const CredentialRouter = require('./routers/CredentialRouters');
const port = require('./setting');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req,res) => res.json('Home Page'));

app.use('/', routes);
app.use('/api/users', UserRouter);
app.use('/api/credential', CredentialRouter);

app.listen(port, () => {
    let dateTime = new Date();
    let message = `Server is running on port: ${port},
Server started on ${dateTime}`;
    console.log(message);
});