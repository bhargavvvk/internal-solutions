// ES5 (Strict Mode, Array Methods, JSON)
"use strict";

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2); // Arrow function (ES6)
console.log(doubled); // [2, 4, 6, 8, 10]

const data = JSON.parse('{"name": "John", "age": 30}'); // JSON parsing (ES5)
console.log(data.name); // John

// ES6 (Arrow Functions, Template Literals, Classes)
const greet = (name) => `Hello, ${name}!`; // Template literal (ES6)
console.log(greet("Alice")); // Hello, Alice!

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}.`); // Template literal (ES6)
  }
}

const person = new Person("Bob");
person.greet(); // Hi, I'm Bob.

// ES7+ (Async/Await, Spread Operator, Optional Chaining)
async function fetchData() {
  const response = await fetch("https://api.example.com/data"); // Async/Await (ES7)
  const data = await response.json();
  return data;
}

fetchData().then((data) => console.log(data));

const user = {
  name: "Charlie",
  address: {
    street: "Main St",
  },
};

console.log(user?.address?.street); // Optional Chaining (ES Optional Chaining) - avoids errors if address is undefined

// ES202x (Private Fields/Methods)
class Animal {
  #type = "Unknown"; // Private field (ES2022)

  getType() {
    return this.#type;
  }
}

const animal = new Animal();
// console.log(animal.#type); // This will error as private fields cannot be accessed directly

console.log(animal.getType()); // Unknown
