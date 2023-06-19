require('express-group-routes');
const express = require('express');
const  loginController  = require('./controllers/loginController');
const app = express()
const port = 3000

app.group("/api/v1", (router) => {
    router.get("/login", loginController.store);
});

app.listen(port)

