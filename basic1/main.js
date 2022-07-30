console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');

// var , let,  const

let score;        // value can be reassigned after initialization etc
score = 10;
const age = 30;  // its value doesn't changes

console.log(age);
console.log(score);

// primitive data types
// String, numbers, booleans, null , undefined

const name1 = 'John';
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof x);

// Concatenation

console.log('My name is '+ name1+ ' and I am of age ' + age);
// template String
const hello = `My name is ${name1} and I am ${age}`;
console.log(hello);


const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const tags = 'technology, computers, it, code';
console.log(tags.split(', '));


// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5,6,7,8,9,10);
const fruits = ['apple', 'oranges', 'pears', 10, true];

fruits[5] = 'grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();

console.log(numbers);
console.log(fruits);
console.log(fruits[1]);

console.log(Array.isArray(s.split('')));
console.log(Array.isArray(s));
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('apple'));


// Object literals - key value pairs

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);
// Destructuring - extracting variables from object literals
const {firstName, lastName, address: {city}} = person;
console.log(city);


person.email = 'John@gmail.com';
console.log(person.email);


// Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,

    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,

    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false,

    },

];

console.log(todos);
console.log(todos[1].text);


// JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/* 
// for loop

for(let i = 0; i <= 10; i++) {
    console.log(`for loop number: ${i}`);
}

// while loop

let i = 0;

while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}
*/

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.isCompleted);
}

// loop through high order array methods
// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);
/* 
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);
 */


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

// Conditionals
/* 
const num1 = 4;
const num2 = 11;
if (num1 > 5 || num2 >10) {
    console.log('num1 is more than 5 or num2 is more than 10');
}
 */

// ternary operators

const x1 = 10;
const color = x1 > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
}


// functions
/* 
function addNums(num1=1, num2=1){
    // console.log(num1+num2);
    return num1+num2;
}

console.log(addNums(5,10)); 
*/

// Arrow functions

const addNum = num1 => num1+5;

console.log(addNum(3));


// OOP

// constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '8-2-1999');

console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person2.getFullName());

console.log(person1);

// Class

class Person1 {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new Person1('hamza', 'afzal', '3-5-2003');
console.log(person3);
console.log(person3.getBirthYear());
console.log(person3.getFullName().toUpperCase());



// DOM manipulation

console.log(window);
// console.log(document);

// single element selectors
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));  // its single line selector so it will select first h1 tag

// multiple element

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item')); //depraciated
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));



// Manipulating DOM 

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';

ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
/* 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
})
 */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value ===  '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

