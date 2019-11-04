exports.apiRandom = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};

    obj.nums = [];
    obj.index = parseInt(q.query["i"]);
    obj.range = parseInt(q.query["r"]);

    for(let i = 0; i < obj.index; i++) {
        obj.nums[i] = Math.round(Math.random() * obj.range);
        console.log(obj.nums[i]);
    }

    res.end(JSON.stringify(obj));
}