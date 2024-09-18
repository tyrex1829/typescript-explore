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

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("tyrex", 23);
console.log(e.name + " " + e.age);

// types

type User2 = {
  firstName: string;
  lastName: string;
  age: number;
};

function isVote(user: User) {}

// union

type StringOrNumber = string | number;

function printID(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printID(123);
printID("111");

// Intersaction

type Employeee = {
  name: string;
  startDate: Date;
};
type Manager = {
  name: string;
  department: string;
};
type TeamLead = Employeee & Manager;

const teamLead: TeamLead = {
  name: "Saksham Khare",
  startDate: new Date(),
  department: "Software Developer",
};

console.log(
  `Name: ${teamLead.name}, Start Date: ${teamLead.startDate}, Department: ${teamLead.department}`
);
