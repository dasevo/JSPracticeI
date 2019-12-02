let mereni = new Array();
const uniqid = require("uniqid");
exports.apiTimer = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};
    let m = {};

    if(q.pathname === "/timer/start") {
        m.tmStart = new Date().getTime();
        let newId = uniqid();
        mereni[newId] = m;
        obj.id = newId;
        obj.status = "Started";
        console.log(obj.id);
        res.end(JSON.stringify(obj));
    }
    else if(q.pathname === "/timer/stop") {
        let tmStop = new Date().getTime();
        let id = q.query["id"];
        let m = mereni[id];

        obj.status = "Stopped";
        obj.time = ((tmStop - m.tmStart)/1000).toFixed(1);

        res.end(JSON.stringify(obj));
    }
    else {
        res.end(JSON.stringify(obj));
    }
}