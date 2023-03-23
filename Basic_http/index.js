const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log("url = ", pathName)

    if(pathName === "/" || pathName === "/home"){
        res.end("<h1>Hello Node.js</h1>");
    }
    else if(pathName === "/naruto"){
        res.end("<p>Naruto</p>");
    }
    else{
        res.writeHead(404);
        res.end("<h1>Not Found</h1>");
    }
});

server.listen(8080, 'localhost',() => 
    console.log("Server Running at port 3000"));