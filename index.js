const http = require('http');

const server = http.createServer((req, res) => {
    const myhtml = `
    <h1>Hello Node.js</h1>
    <p>Naruto</p>`

    res.write(myhtml);
    res.end();
});

server.listen(8080, 'localhost',() => 
    console.log("Server Running at port 3000"));