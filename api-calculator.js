exports.apiCalculator = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};
    let result = 0;

    obj.firstNum = parseInt(q.query["f"]);
    obj.secondNum = parseInt(q.query["s"]);
    obj.operator = q.query["o"];

    if (obj.operator === "*") {
        result = obj.firstNum * obj.secondNum;
    } else if (obj.operator === "/") {
        result = obj.firstNum / obj.secondNum;
    } else if (obj.operator === "+") {
        result = obj.firstNum + obj.secondNum;
    } else if (obj.operator === "-") {
        result = obj.firstNum - obj.secondNum;
    } else if (obj.operator === "%") {
        result = obj.firstNum % obj.secondNum;
    } else {
        result = "Error";
    }

    obj.result = result;

    res.end(JSON.stringify(obj));
};