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

function runAFn(cb: () => void) {
  setTimeout(cb, 1000);
}

runAFn(() => {
  console.log("cb fn");
});

const greetings = (name: String) => `Hello ${name}!`;
const display = greetings("Tyrex");
console.log(display);

interface User {
  firstName: string;
  lastName: string;
  email?: string;
  age: number;
}

const user: User = {
  firstName: "Saksham",
  lastName: "Khare",
  age: 23,
};

function isLegal2(user: User): boolean {
  if (user.age < 18) return false;
  return true;
}

const vote2 = isLegal2(user);
console.log(vote2);
