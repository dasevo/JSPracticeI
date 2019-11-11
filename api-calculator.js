exports.apiCalculator = function (req, res, q) {
    res.writeHead(200, {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    let obj = {};
    let result = 0;

    obj.input = q.query["i"];

    console.log(obj.input);

    let temp = obj.input.indexOf(" ");
    obj.firstNum = parseInt(obj.input.substring(0, temp));
    console.log(obj.firstNum);
    obj.input = obj.input.substring(temp+1);
    temp = obj.input.indexOf(" ");
    obj.operator = obj.input.substring(0, temp);
    console.log(obj.operator);
    obj.input = obj.input.substring(temp+1);
    temp = obj.input.indexOf(" ");
    obj.secondNum = parseInt(obj.input.substring(0));
    console.log(obj.secondNum);


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