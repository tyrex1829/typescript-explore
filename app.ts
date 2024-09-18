const x: number = 1;
console.log(x);

function great(x: String) {
  console.log("Hello " + x);
}

great("Saksham");

function sumOfTwoNumber(a: number, b: number): number {
  return a + b;
}

const ans = sumOfTwoNumber(1, 2);
console.log(ans);

function isLegal(age: number): boolean {
  if (age < 18) {
    return false;
  }
  return true;
}

const vote: boolean = isLegal(20);
console.log(vote);
