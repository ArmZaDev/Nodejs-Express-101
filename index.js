const http = require('http');
const Fs = require('fs');

const indexPage = Fs.readFileSync(`${__dirname}/templates/index.html`)
const productPage = Fs.readFileSync(`${__dirname}/templates/product1.html`);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    console.log("url = ", pathName)

    if(pathName === "/" || pathName === "/home"){
        res.end(indexPage);
    }
    else if(pathName === "/product"){
        res.end(productPage);
    }
    else{
        res.writeHead(404);
        res.end("<h1>Not Found</h1>");
    }
});

server.listen(8080, 'localhost',() => 
    console.log("Server Running at port 8080"));