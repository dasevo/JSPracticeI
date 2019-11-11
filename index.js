const http = require("http");
const url = require("url");
const apiCalculator = require("./api-calculator").apiCalculator;
const apiRandom = require("./api-random").apiRandom;
const apiCompare = require("./api-compare").apiCompare;

function processStaticFiles(res, fileName) {

}

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (q.pathname === "/doTheMath") {
        apiCalculator(req, res, q);
    } else if(q.pathname === "/getNum") {
        apiRandom(req, res, q);
    } else if(q.pathname === "/compare") {
        apiCompare(req, res, q);
    } else {
        res.writeHead(200, {"Content-type": "text/html", "Access-Control-Allow-Origin": "*"});
    }
}).listen(2000);