// Task 1 - Variables (let vs const)

let course = "Web Programming";

let students = 30;
students += 5;

console.log("Course: ", course);
console.log("Total Students: ", students)

// task 2 - Arrow Functions

const square = (num) => num * num;

console.log("Num Squared: ", square(4))

// Task 3 - Template Literals

let name = "Alice";
let age = 21;
let city = "Dallas";

console.log('My name is ${name}, I am ${age} years old, and live in ${city}');

// Task 4 - Array Destructuring
let fruits = ["Apple", "Banana", "Cherry"];
let [FirstFruit, SecondFruit, ThirdFruit] = fruits;

console.log(FirstFruit);
console.log(SecondFruit);
console.log(ThirdFruit);

// Task 5 - Object Destucturing

const student = {
    name2: "John",
    major: "Computer Science",
    year: 2
};

let {name2, major, year} = student
console.log(name2);
console.log(major);
console.log(year);

// Task 6 - Spread Operator

let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5,6];

console.log(arr2);

// Task 7 - Array Method (Map)

let numbers = [1,2,3,4];

let doubled = numbers.map(num => num * 2);

console.log(doubled);

// Task 8 - Array Method (Filter)
let numbers2 = [5,10,15,20,25];
let result = numbers2.filter(num => num > 15);

console.log(result);

// Task 9 - Array Method (forEach)

let colors = ["Red", "Green", "Blue"];

colors.forEach(num => {
    console.log(num)
});