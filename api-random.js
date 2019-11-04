exports.apiRandom = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};

    obj.min = 0;
    obj.max = 0;

    obj.num = [];
    obj.index = parseInt(q.query["i"]);
    obj.min = parseInt(q.query["min"]);
    obj.max = parseInt(q.query["max"]);

    if(obj.min > obj.max) {
        let temp = obj.min;
        obj.min = obj.max;
        obj.max = temp;
    }

    for(let i = 0; i < obj.index; i++) {
        obj.num[i] = Math.round(Math.random() * (obj.max - obj.min)) + obj.min;
    }

    res.end(JSON.stringify(obj));
}