exports.apiCompare = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};
    obj.first = parseInt(q.query["f"]);
    obj.second = parseInt(q.query["s"]);
    obj.compare = obj.first === obj.second;

    res.end(JSON.stringify(obj));
}