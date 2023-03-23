const express = require('express');
const router = require('./routes/router.js');
const app = express(); //object express

app.use(router);

app.listen(8080, () =>{
    console.log("Server running at port 8080")
})