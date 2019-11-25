const http = require("http");
const url = require("url");
const fs = require('fs');
const apiCalculator = require("./api-calculator").apiCalculator;
const apiRandom = require("./api-random").apiRandom;
const apiCompare = require("./api-compare").apiCompare;

function processStaticFiles(res, fileName) {
    fileName = fileName.substr(1); //zkopiruju od druheho znaku
    console.log(fileName);
    let contentType = "text/html";
    if (fileName.endsWith(".png")) {
        contentType = "image/png";
    } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
        contentType = "image/jpeg";
    }

    if (fs.existsSync(fileName)) {
        fs.readFile(fileName, function(err, data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404); //soubor neexistuje
        res.end();
    }
}

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (q.pathname === "/doTheMath") {
        apiCalculator(req, res, q);
    } else if(q.pathname === "/getNum") {
        apiRandom(req, res, q);
    } else if(q.pathname === "/compare") {
        apiCompare(req, res, q);
    } else if(q.pathname === "/kalkulacka.html") {
        res.writeHead(200, {"Content-type": "text/html", "Access-Control-Allow-Origin": "*"});
        processStaticFiles(res, "/kalkulacka.html");
    } else if(q.pathname === "/priklady.html") {
        res.writeHead(200, {"Content-type": "text/html", "Access-Control-Allow-Origin": "*"});
        processStaticFiles(res, "/priklady.html");
    } else {
        res.writeHead(200, {"Content-type": "text/html", "Access-Control-Allow-Origin": "*"});
        processStaticFiles(res, "/index.html")
    }
}).listen(8080);