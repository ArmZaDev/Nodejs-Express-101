const express = require('express');
const app = express(); //object express

app.get("/", (req, res) => {
    res.send("<h1>Hello Express.js</h1>")
})

app.listen(8080, () =>{
    console.log("Server running at port 8080")
})