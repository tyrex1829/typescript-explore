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

// Arrays

function maxNumber(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxNumber([1, 2, 3]));

// Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
    console.log("up");
  } else if (keyPressed == Direction.Right) {
    console.log("right");
  } else if (keyPressed == Direction.Down) {
    console.log("down");
  } else if (keyPressed == Direction.Left) {
    console.log("left");
  } else {
    console.log("not recogonized");
  }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);

// Generics

function args<T>(arg: T): T {
  return arg;
}

const out1 = args<string>("Saksham");
const out2 = args<number>(1000);
console.log(out1 + " " + out2);

// Generics with array

function firstEle<T>(arg: T[]): T {
  return arg[0];
}

const value = firstEle<string>(["Tyrex", "Saksham"]);
const value2 = firstEle<number>([1, 2, 3]);
console.log(value + " " + value2);

//

function firstEle1<T>(arg: T[]): T {
  return arg[0];
}

const answer = firstEle1<string>(["xyz", "zyx"]);
console.log(answer.toUpperCase());

// Imports in TS

import Tyrex, { a } from "./subApp";
console.log(a);
console.log(Tyrex);

//
//
// More TS APIs
//
//

// Recap

interface admin {
  name: string;
  age: number;
}

function sumOfAge(user1: admin, user2: admin) {
  return user1.age + user2.age;
}

const result = sumOfAge(
  {
    name: "Saksham",
    age: 24,
  },
  {
    name: "Tyrex",
    age: 5,
  }
);

console.log(result);

// Pick

interface admin1 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type pickedAdmin1 = Pick<admin1, "name" | "age" | "email">;

function displayProfile(user: pickedAdmin1) {
  console.log(`Name: ${user.name}, age: ${user.age}, email: ${user.email}`);
}

displayProfile({
  name: "xyz",
  age: 987,
  email: "xyz",
});

// Partial

interface admin2 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type pickedAdmin2 = Pick<admin2, "name" | "age" | "email">;

type pickedAdmin2Partial = Partial<pickedAdmin2>;

function displayProfile2(user: pickedAdmin2Partial) {
  console.log(`Name: ${user.name}, age: ${user.age}, email: ${user.email}`);
}

displayProfile2({
  name: "xyz",
});
