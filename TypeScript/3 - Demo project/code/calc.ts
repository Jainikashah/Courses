type data = {
    initialAmount: number,
    annualCont : number,
    expectedReturn : number,
    duration: number 
} 
function calcInvestment(data:data): Record<string, number> {
    return {
           [data.duration]: data.initialAmount + data.annualCont + data.expectedReturn
        }
}

function printResult(data: Array<Record<string,number>>) {
    console.log(data);
}

const results: Record<string, number>[] = [];
let dt = {
    initialAmount: 1000,
    annualCont : 100,
    expectedReturn : 10,
    duration: 1
}
results.push(calcInvestment(dt))
printResult(results)

