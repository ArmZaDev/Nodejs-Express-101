const express = require('express');
const path = require('path');
const router = require('./routes/router.js');
const app = express(); //object express

app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs-lint');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () =>{
    console.log("Server running at port 8080")
})