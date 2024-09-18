"use strict";
const x = 1;
console.log(x);
function great(x) {
    console.log("Hello " + x);
}
great("Saksham");
function sumOfTwoNumber(a, b) {
    return a + b;
}
const ans = sumOfTwoNumber(1, 2);
console.log(ans);
function isLegal(age) {
    if (age < 18) {
        return false;
    }
    return true;
}
const vote = isLegal(20);
console.log(vote);
function runAFn(cb) {
    setTimeout(cb, 1000);
}
runAFn(() => {
    console.log("cb fn");
});
