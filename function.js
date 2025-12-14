function calculate(x, y) {
    let total = x * y;
    console.log(x, "* ", y, "is ", total)
}
calculate(3, 6)

function calculatevalue(a,b) {
    const sum = a + b;
    return sum;
}
console.log(calculatevalue(2, 3))

function simpleinterest(principal, annualrate, days) {
    const interest = principal * (annualrate / 100) * (days / 365);
    return interest;
}

console.log(simpleinterest(6000, 10, 365));


