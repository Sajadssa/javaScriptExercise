// start js
// for (i = 0; i <= 5; i++) {
//     console.log("this is number", i);

// }
// let i = 0;
// while (i <= 5) {

//     console.log("this is number", i);
//     i++;
// }
// let i = 0;
// do {
//     console.log("this is number", i);
//     i++;
// } while (i <= 5)

// function plus(a, b) {
//     // document.getElementById("mytext").innerHTML = a ** b;
//     // if (a < b) {
//     //     document.getElementById("mytext").style.backgroundColor = "blue";
//     // } else if (a >= b) {
//     //     document.getElementById("mytext").style.backgroundColor = "rgba(0,21,255,.8)";
//     //     document.getElementById("mytext").style.color = "white";
//     //     document.getElementById("mytext").style.borderRadius = "2rem";
//     // } else document.getElementById("mytext").style.backgroundColor = "green";
//     return a += 4;
// }

// document.getElementById("mytext").innerHTML = plus(1, 2);
// document.getElementById("mytext").style.borderRadius = "2rem";
// if function have global variable and function dose'nt return so output will be undefined
// var sum = 0;

// function addThree() {
//     sum = sum + 3;

// }
// document.getElementById("mytext").innerHTML = addThree();

// console.log(addThree());
// bracket notation is dynamic type and  dot notation is dynamic
// let user = {
//     name: "sajad",
//     age: 34,
// }
// for (key in user) {
//     document.getElementById("mytext").innerHTML = key, user[key];
// }
//     console.log(key, user[key]);

// for in for  access object
// for of for access arrayers

// let colors = ["red", "green", "blue"];
// for (let index in colors) {
//     let indexNum = colors[index];

//     if (indexNum = colors[2])
//         document.getElementById("mytext").innerHTML = indexNum;
//     document.getElementById("mytext").style.background = indexNum;
// }
// for (let item of colors) {
//     document.getElementById("mytext").innerHTML = colors;
// }

// for (let i = 0; i <= colors.length; i++) {
//     document.getElementById("mytext").innerHTML = colors;

// }
// console.log(colors);
// var changed = 0;

// function change(num) {
//     return (num + 5) / 3;

// }
// changed = change(10);
// console.log(changed);

// var processed = 0;

// function processArg(num) {
//     return (num + 3) / 5;
// }
// processed = processArg(6)
// console.log(processed)
// =============function with return in arrays
// function nextInLine(arr, item) {
//     // Your code here
//     arr.push(item);
//     return arr.shift();

// }
// var testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));
// document.getElementById("mytext").innerHTML =
//     "after: " + JSON.stringify(testArr);
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it's true";
//     }
//     return "No, it's false";
// }

// console.log(ourTrueOrFalse(true));
// document.getElementById("mytext").innerHTML = ourTrueOrFalse(true);
// function testEqual(val) {
//     if (val % 2 == 0) { // Change this line
//         document.getElementById("mytext").style.background = "green";
//         return "Even";

//     }
//     document.getElementById("mytext").style.background = "red";
//     return "odd";
//     // Change this value to test
//     // if val equal even then bgc=green and type=even else bgc=red and type=odd
// }

// document.getElementById("mytext").innerHTML = testEqual(8);
//exercise:max()
// function max(a, b) {
//     // if (a > b)
//     //     return a;
//     // return b;
//     return (a > b) ? a : b
//         // ternary operator
// }

// document.getElementById("mytext").innerHTML = "max is :" + max(4, 7);
// console.log(max(4, 7));
// ===========exercise 2===========isLandScaped
// function isLandScaped(width, height) {
//     return (width > height) ? true : false;
// }
// document.getElementById("mytext").innerHTML = isLandScaped(700, 900);
// console.log(isLandScaped(700, 900));
// ===========exercise3:fizzbuzz================
// function fizzBuzz(number) {
//     if (typeof number !== "number") return "not a number ";

//     if (number % 3 == 0 && number % 5 == 0) return "fizzbuz";

//     else if (number % 3 == 0) return "fizz"
//     else if (number % 5 == 0) return "buzz"

//     else return number

// }

// document.getElementById("mytext").innerHTML = fizzBuzz(3);
// console.log(fizzBuzz());
//exorcize speedlimit=70
//if speed<=70 ok

//else if speed>70 i  -1
//x=75 result=1point x=80 2point
//5km more than 70km===> 1 negative
// if points<12==> show points
//points>12==>suspended
// function speedCheck(speed) {

//     if (speed <= 70) return "ok"
//     else {
//         let points = (speed - 70) / 5;
//         if (points <= 12) return points;
//         else { return "suspended" }
//     }

// }
// document.getElementById("mytext").innerHTML = speedCheck(150);
// document.getElementById("mytext").innerHTML = circle;
// console.log(circle.move());
// //object in js
// let nameobject = { "name": "a", "lastname": "b", 12: "sa" }
// console.log(nameobject.name)
// factory function=for make objects
// constructor function=for make objects
// function createCircle(radius) {
//     return {
//         radius,
//         move() {
//             console.log("move")
//         },
//     };

// }
// console.log(createCircle(3))
// const circle1 = createCircle(2)
// const circle2 = createCircle(4);
// console.log(circle1);
// console.log(circle2);
// factory function: camelCase
// constructor function:PascalCase

// ======constructor function=========
// function Circle(radius) {
//     this.radius = radius;
//     this.move = function() {
//         console.log("move");
//     };
// }
// const circle2 = new Circle(2);
// //new
// // 1.{} make empty object
// // 2. this keyword  points to this empty object {empty}
// //3. return this object
// let Buttons = document.getElementById("button");
// Buttons.addEventListener("click", () => {
//     let users = [09917540483, 09370142139, 9136451525, 9029754524];
//     let userRandom = [];
//     let userrnd = Math.floor(Math.random() * users.length);
//     userRandom.push(users[userrnd]);
//     document.getElementById("mytext").innerHTML = userRandom;
// });
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }

// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
// document.getElementById("mytext").innerHTML = pokemonName.call(
//     pokemon,
//     "sushi",
//     "algorithms"
// );
// const sajad = { age: 34 }
// sajad.phone = 09917540483;
// sajad.gender = "male";
// document.getElementById("mytext").innerHTML = sajad;
// console.log(sajad)
//     //permeative type and reference type
//     //permeative type:string,boolean,number,..
//     //reference type:array,function,object
// let x = 10;
// let y = x;
// x = 12;
// console.log(x, y);
// //if changes x then y is const because only 
// //change value x and permeative type dont allow 
// //change y
// //reference type
// const user = { name: "sajad", age: 34 }
// const user2 = user; //reference type between user and user2
// user2.name = "ali";
// user2.email = "sajadsaeediazad0007@gmail.com"
// console.log(user2); //when copeid from user with user2
// //such as copy address user to user2 
// //and make changes value property name in user
// //enumerating object:

// const keys = Object.keys(user)
// console.log(keys)
//     //return array of keys

// console.log(Object.values(user));
// console.log(Object.entries(user));
// for (key in user) {
//     console.log(key, user[key])
// }
// for (index of user) console.log(index)
// const user = { name: "sajad", age: 25 }
//     //cloning object
// const user2 = {};
// for (key in user) {
//     user2[key] = user[key];
// }
// user2.age = 35;
// console.log(user2);
// console.log(user);
// //cloning object with for in
// //2.assign method
// const user3 = Object.assign({}, user)
// user3.age = 27;
// console.log(user);
// let users = "sajad";
// users.length;
// let user1 = {
//     name: "sajad",
//     age: 28,
//     address: {
//         province: "khozestan",
//         city: "iezh"
//     }
// }

// function showUser(obj) {
//     for (key in obj) {
//         console.log(key, obj[key]);
//     }
// }

// document.getElementById("mytext").innerHTML = showUser(user1);
// //factory function :most keyword "return"
// function User(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = User("Tom", 23);
// console.log(user);

// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         getFullName() {
//             return firstName + " " + lastName;
//         },
//     };
// }

// let person1 = createPerson("John", "Doe");
// let person2 = createPerson("Jane", "Doe");

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// var personActions = {
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     },
// };

// function createPerson(firstName, lastName) {
//     let person = Object.create(personActions);
//     person.firstName = firstName;
//     person.lastName = lastName;
//     return person;
// }
//factory function
// const user2 = {
//     name: "sajad",
//     age: 34,
//     street: "abc",
// }

// function createUser(name, age, street) {
//     return {
//         name,
//         age,
//         street,
//     }
// }
// const newUser = createUser("mehdi", "25", "xxx");
// console.log(newUser);
// //constructor function
// function CreateUser(name, age, street) {
//     this.name = name;
//     this.age = age;
//     this.street = street;
//     return this;

// }
// const user5 = { nationality: "IR" }
// let NewUser = new CreateUser("ss", 12, "sss");
// console.log(NewUser);
// const user3 = CreateUser.apply({}, ["human", 8, "bb"]);
// console.log(user3);
// const user4 = CreateUser.call({}, "farhad", 44, "the");
// console.log(user4);
// const user6 = CreateUser.call(user5, "ali", 24, "rr");
// console.log(user6);
// let blog = {
//     title: "s",
//     subject: "poem",
//     author: "aa",
//     views: 20,
//     comments: {
//         author: "sajad",
//         opninin: "hiiiii",
//     },
//     islived: true,
// }
// console.log(blog);
// // document.getElementById("mytext").innerHTML = blog;

// function blogPost(title, author, body) {
//     this.title = title;
//     this.author = author;
//     this.body = body;
//     this.viwes = 0;
//     this.comments = [];
//     this.islive = false;

// }
// let blog2 = new blogPost("n", "dd", "ss");
// console.log(blog2);
// const number = [{ name: "sajad", id: 1 },
//     { name: "amir", id: 2 }
// ];

// const selectedItem = number.findIndex(function(select) {
//     if (select.id === 2) return select;
// })
// console.log(selectedItem);
// document.getElementById("mytext").innerHTML = selectedItem;

// const numbers = [1, 2, 3, 4, 5];
// const p = numbers.push("ss");

// document.getElementById("mytext").innerHTML = numbers;
// const d = numbers.pop();
// document.getElementById("mytext").innerHTML = numbers;
// const s = numbers.shift()
// document.getElementById("mytext").innerHTML = numbers;
// const ws = numbers.unshift("44");
// document.getElementById("mytext").innerHTML = numbers;
// const ee = numbers.splice(1, 1, "rr", 7);
// document.getElementById("mytext").innerHTML = numbers;
// const a=[1,2,3,4];

// console.log(a.indexOf(1));

 const numbers=[1,2,3,4,5];

function includes(array,searchEl){
    for (let index of array) {
        if(index===searchEl) return true;
        return false;
    }
    
}
console.log(includes(numbers,1));
document.getElementById("mytext").innerHTML=includes(numbers,3);