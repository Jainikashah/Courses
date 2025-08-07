function calcInvestment(data) {
    var _a;
    return _a = {},
        _a[data.duration] = data.initialAmount + data.annualCont + data.expectedReturn,
        _a;
}
function printResult(data) {
    console.log(data);
}
var results = [];
var dt = {
    initialAmount: 1000,
    annualCont: 100,
    expectedReturn: 10,
    duration: 1
};
results.push(calcInvestment(dt));
printResult(results);
