//  // Setup
 var myArray = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [
         [10, 11, 12], 13, 14
     ]
 ];
 var myData = myArray[3][0][2];
 console.log(myData);
 // Only change code below this line.
 //  var myData = myArray[2][1];
 // Example
// Example
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// // ourArray now equals ["Stimson", "J", "cat", ["happy", "joy"]]
// // Setup
// var myArray = [
//     ["John", 23],
//     ["cat", 2]
// ];
// myArray.push(["sajad", 34])
// console.log(ourArray);

// Only change code below this line.const animals = ['pigs', 'goats', 'sheep'];

// const animals = ["pigs", "goats", "sheep"];
// const count = animals.push('cows', 'cats');
// document.getElementById("mytxt").innerHTML = animals;

// // expected output: 4

// // expected output: Array ["pigs", "goats", "sheep", "cows"]
// function selectText() {
//     const input = document.getElementById("text-box");
//     input.focus();
//     input.select();
// }

// const fruits = [
//     ["milk", 2],
//     ["juice", 3],
//     [
//         ["banana", ["iran", [
//             ["orange", [
//                 ["melon"]
//             ], "mir"]
//         ]], 5],
//         [
//             [
//                 ["egg", 7]
//             ]
//         ]
//     ]
// ];
// var addIndexNew = ["sajad", 7];
// fruits.push(addIndexNew);
// var removeIndex = fruits.unshift();
// unshift begin from array 
// push add index  to last array 
// var addNew = ["cats", "donkey", 20];
// const removeArray = animals.pop();
// var removeIndex = animals.pop();
// var addNew = animals.unshift();
// unshift similar to push
//push add new index to array
//pop remove  last index from array
// shift remove first index and show other index
// removed FromOurArray now equals 3, and ourArray now equals [1,2]
// Setup

// Only change code below this line.
// var removedanimalss;
// document.getElementById("mytxt").innerHTML = fruits[2][0][1][1][0][2];

// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
1 // Setup
// var myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [
//         [10, 11, 12], 13, 14
//     ]
// ];

// var myData = myArray[3][0][0];
// // find index in multidemisional
// console.log(myData);
// var ourArray = ["Stimpson", "j", "cat"];
// ourArray.push(["happy", "joy"]);
// console.log(ourArray);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
// var myArray = [
//     ["John", 23],
//     ["cat", 2]
// ];
// myArray.push(["dog", 3]);
// console.log(myArray);
// Only change code below this line.
// function writeMir() {
//     document.getElementById("mytxt").innerHTML = fruits[2][0][1][1][0][2];
// }
// writeMir();
// 
// let a, b;
// // function my be parameter(a,b)

// function match(a, b) {

//     document.getElementById("mytxt").innerHTML = a * b;

// }
// // call function may be argument(4,2)
// match(4, 2);




// var myGlobal = 10;

// function fun1() {
//     // Assign 5 to oopsGlobal Here
//     popsGlobal = 5;
// }
// // Only change code above this line
// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " +
//             +myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//         document.getElementById("mytxt").innerHTML = output;
//         console.log(output);
//     }
// }
// fun1();
// fun2();
// document.getElementById("mytxt").innerHTML = fun1();
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();
// console.log(myVar);
// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear = "sweater";
//     return outerWear;
// }
// console.log(myOutfit());
// console.log(outerWear);
// ==========comparison between ==(check only value) and ===(check value and type)=====
// function compareEquality(a, b) {
//     if (a === b) {
//         // Change this line
//         return "Equal";
//     }
//     return "Not Equal";
// }
// // Change this value to test
// console.log(compareEquality(10, "10"));
// document.getElementById("mytxt").innerHTML = compareEquality(10, '10'); 
// function testNotEqual(val) {
//     if (val !== 9) { // Change this line
//         return "Not Equal";

//     }
//     return "Equal";
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = testNotEqual(10);
// console.log(testNotEqual(10));
// function testStrictNotEqual(val) {
//     // Only Change Code Below this Line
//     if (val !== 10) {
//         // Only Change Code Above this Line
//         return "Not Equal";
//     }
//     return "Equal";
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = testStrictNotEqual(10)
// console.log(testStrictNotEqual(10));
// function testGreaterThan(val) {
//     if (val > 100) { // Change this line
//         return "Over 100";
//     }
//     if (val > 10) { // Change this line
//         return "Over 10";
//     }
//     return "10 or Under";
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = testGreaterThan(1000);
// console.log(testGreaterThan(10));
// function testLessOrEqual(val) {
//     if (val <= 12) { // Change this line
//         return "Smaller Than or Equal to 12";
//     }
//     if (val <= 24) { // Change this line
//         return "Smaller Than or Equal to 24";
//     }
//     return "More Than 24";
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = testLessOrEqual(121)
// console.log(testLessOrEqual(10));
// function testLogicalAnd(val) {
//     // Only change code below this line
//     if (val <= 50 && val >= 25) {

//         return "yes"; // Only change code above this line

//     }
//     return "No";
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = testLogicalAnd(15);
// console.logtestLogicalAnd(10);
// function testLogicalOr(val) {
//     // Only change code below this line
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }
//     // Only change code above this line
//     return "Inside";
// }

// // Change this value to test
// document.getElementById("mytxt").innerHTML = testLogicalOr()
// console.testLogicalOr(15);
// function calander(val) {
//     var answer = ""
//     switch (val) {
//         case 0:
//             answer = "saturday";
//             break;
//         case 1:
//             answer = "sunday";
//             break;
//         case 2:
//             answer = "monday"
//             break;
//         case 3:
//             answer = "thursday"
//             break;
//         case 4:
//             answer = "tuseday"
//             break;
//         case 5:
//             answer = "wednesday"
//             break;
//         case 6:
//             answer = "thursday";
//             break;


//     }
//     return answer;
// }
// // Change this value to test
// document.getElementById("mytxt").innerHTML = calander(4);
// ====calender=========
// let day = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
// let val = 0;

// function calender(val) {
//     if (typeof val !== "number" || val === null || val === false) return "not a number"
//     if (day.length >= 6)
//         return day[val];
//     else
//         return "Invalid"



// }

// document.getElementById("mytxt").innerHTML = calender(0);
// // document.getElementById("mytxt").innerHTML = day;
// console.log(calender(5));
// function isLess(a, b) {
//     // Fix this code
//     return a < b;
// }
// // Change these values to test
// console.log(isLess(10, 15));
// document.getElementById("mytxt").innerHTML = isLess(20, 15);
// function abTest(a, b) {
//     // Only change code below this line
//     if (a < 0 || b < 0)
//         return "undefined";
//     // Only change code above this line
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// // Change values below to test your code
// document.getElementById("mytxt").innerHTML = abTest(2, 2);
// let cstudent = 0

// function countstudent(student) {
//     switch (student) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             cstudent++;

//             break;
//         case 10:
//         case "good":
//         case "bad":
//             cstudent--;
//         default:
//             break;
//     }
//     let member = "good/bad";
//     if (cstudent > 0)
//         member = "good"
//     return cstudent + " " + member;
//     i
// }
// countstudent(2);
// countstudent('k');
// countstudent("good");
// countstudent('bad');
// countstudent('10');

// document.getElementById("mytxt").innerHTML = countstudent('good');
// dot notation
// let user = { name: "sajad", age: 34, height: 1.78, weight: 75 };
// document.getElementById("mytxt").innerHTML = user.height;
// bracket notation
// document.getElementById("mytxt").innerHTML = user["height"]
//     add property to an object
// user["email"] = "sajadsaeediazad0007@gmail.com"
// document.getElementById("mytxt").innerHTML = user.email;
// document.getElementById("mytxt").innerHTML = user;
// console.log(user);
// delete property from an object
// delete user.email;
// document.getElementById("mytxt").innerHTML = user.email;
// use object for lookups value example dictionary
// replace object with switch statement
// function phoneticLookup(val) {
//     var result = "";
//     switch (val) {
//         case "alpha":
//             result = "Adams";
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":

//             result = "Frank";
//             break;
//         default:

//     }
// replace switch statement with object
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxtrot": "frank"
//     };
//     result = lookup[val]
//     return result;
// }

// document.getElementById("mytxt").innerHTML = phoneticLookup("delta");
// accessing object with dot notation
// let username = {
//     name: "sajad", //12:"sajad"
//     email: "sajadsaeediazad0007@gmail.com", //16:sajadsaeediazad0007@gmail.com
//     address: "iezh",
//     age: 34
// };
// document.getElementById("mytxt").innerHTML = username.name;
// accessing object with bracket notation
// document.getElementById("mytxt").innerHTML = username["email"]
// accessing object with variables

// let player = username;
// document.getElementById("mytxt").innerHTML = username[12];
// updating object properties
// username.age = 35;
// document.getElementById("mytxt").innerHTML = username.age;
// add new properties to an object
// username.gender = "male";
// console.log(username);
// delete properties from object
// delete username.age;
// console.log(username);
//======testing object for properties--for find properties
// hasOwnProperty Function: for check properties in object or array and etc in JavaScript
// function checkObj(checkProp) {
//     if (username.hasOwnProperty(checkProp)) {
//         return username[checkProp];
//     } else {
//         return "Not Found";


//     }

// }
// document.getElementById("mytxt").innerHTML = checkObj("email");
//Manipulating complex object
// var myMusic = [{
//         artist: "Billy Joel",
//         title: "Piano Man",
//         release_year: 1973,
//         formats: ["CD", "8T", "LP"],
//         gold: true
//     }
  // Add record here
// ];
// document.getElementById("mytxt").innerHTML = myMusic;
// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
// define variable for better understand concept here variable is gloveBoxContents. for show result we use of variable
// var gloveBoxContents = myStorage.car.inside["glove box"]; // Chan
// document.getElementById("mytxt").innerHTML = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);
// access nested arrays of objects
// var myPlants = [{
//         type: "flowers",
//         list: ["rose", "tulip", "dandelion"]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "brich",
//             {
//                 water: ["cold", "hot", "warm"]
//             }
//         ]
//     }
// ];
// document.getElementById("mytxt").innerHTML = myPlants[1].list[3].water[1];
// var collection = {
//     "2468": {
//         "album": "love",
//         "artist": "sajad",
//         "tracks": ["2001", "love is love"]

//     },
//     "2428": {
//         "album": "",
//         "artist": " ",
//         "tracks": []

//     },
//     "1245": {
//         "album": "peace",
//         "artist": "sajad",
//         "tracks": []

//     }
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//     if (value === "") {
//         delete collection[id][prop];

//     } else if (prop === "tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);

//     } else { collection[id][prop] = value; }
//     return collection;

// }
// console.log(updateRecords(2468, "tracks", "enjoy"));
// document.getElementById("mytxt").innerHTML = updateRecords(
//     2428,
//     "tracks",
//     "love is love"
// );
// =========iterate for while loop
// var myArray = []; //define box that show array, is list item that is variants
// var i = 1; //members of capacity for arrays determine by user ,first number value
// while (i < 7) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);
// document.getElementById("mytxt").innerHTML = myArray;
//example count backwards for loop
// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//     ourArray.push(i);
// }
// document.getElementById("mytxt").innerHTML = ourArray;
// console.log(ourArray);

// var myArray = [];
// for (i = 1; i <= 9; i += 2) {
//     myArray.push(i)
// }
// document.getElementById("mytxt").innerHTML = myArray;
// iterate through an array with for loop??????????????

// var ourTotal = 0;
// var ourArr = [9, 10, 11, 12];
// // var tot = ourArr[0] + ourArr[1] + ourArr[2] + ourArr[3];
// // document.getElementById("mytxt").innerHTML = tot;
// var ourTotal = 0;
// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i]; //ourtotal=ourtotal+ourArr[i]
// }
// document.getElementById("mytxt").innerHTML = ourTotal;
// console.log(ourTotal);
// ===========Nested Array FOR Loop
// function multiplyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7]
// ]);
// document.getElementById("mytxt").innerHTML = product;
// console.log(product);
// ============do while loops========================
// Setup
// var myArray = [];
// var i = 10;

// // Only change code below this line.
// do {
//     myArray.push(i);
//     i++;
// } while (i < 5);
// // document.getElementById("mytxt").innerHTML = ;
// console.log(i, myArray);
// ==profile lookup========================arrays of object
// var contacts = [{
//         "firstName": "sajad",
//         "LastName": "saeedi",
//         "number": "09917540483",
//         "Likes": ["Piza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "Likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "LastName": "Holmes",
//         "number": "0487345643",
//         "Likes": ["Intriguing Cases", "Violin"]
//     }
// ];

// function profileLookup(name, prop) {
//     // pass 2 parameter for find object
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             return contacts[i][prop] || "no prop";

//         }
//         return "no"
//     }
// }
// console.log(profileLookup("Sherlock", "LastName"));
// let len = contacts.length;
// console.log(len);
// document.getElementById("mytxt").innerHTML = profileLookup("sajad", "hello");
// function random and whole number
// function randomFraction() {
//     return (Math.random());
// }
// document.getElementById("mytxt").innerHTML = randomFraction();
// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

let num = [9917540483, 9136451525, 9370142139]

function randomWholeNum() {

    for (i = 0; i < num.length; i++) {
        return Math.floor(Math.random() + num[i]);
    }
    return "ok";


}
// document.getElementById("mytxt").innerHTML = randomWholeNum();
console.log(randomWholeNum());
//difference between var and let and const
function checkScope() {
    "use strict";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is", i);
    }
    console.log("Function scope i is", i);
    return i;
}
checkScope();
//difference between var and let with const
function printManyTimes(str) {
    "use strict";
    let sentences = str + "is cooling";
    sentences = str + "is amazing";
    for (var i = 0; i < str.length; i += 2) {
        console.log(sentences);
    }
}
printManyTimes("sajad");

const s = [5, 7, 2];

function editInPlace() {
    "use strict";
    s = [2, 1, 7];
}
console.log(s);
//show arrow function
var magic = () => {
    return new date();
}
//arrow function
var m = (arr1, arr2) => arr1.concat(arr2);
console.log(m([1, 2], [3, 4, 5]));
//arrow function with filter syntax
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
//arrayObject.filter(callback, contextObject);
//array.filter(Callback(عنصر، فهرست، arr)، thisValue)

function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [10, 1, 5]
// document.getElementById("mytxt").innerHTML = data.filter(isInRange, range);
// JavaScript to illustrate findIndex() method
function canVote(age) {
    return age >= 18;
}

function func() {
    var filtered = [24, 33, 16, 40].filter(canVote);
    document.write(filtered);
    return filtered;
}
console.log(func());;
// document.getElementById("mytxt").innerHTML = func();

function isPositive(value) {
    return value > 0;
}

var filtered = [112, -52, 0, -1, 944].filter(isPositive);
// document.getElementById("mytxt").innerHTML = filtered;

let scores = [12, 90, 14, 72, 89, 51];

scores.map(function () {
    console.log("SabzLearn");
});

scores.filter(function () {
    console.log("SabzLearn");
});

let scoress = [12, 90, 14, 72, 89, 51];

scoress.map(function (score) {
    console.log(score); // 12 90 14 72 89 51
});

scores.filter(function (score) {
    console.log(score); // // 12 90 14 72 89 51
});
//با این کد تک تک ایتم های ارایه در2 ضرب میشوند بوسیله تابع map
//درحالت عادی تابع map یک تابع بعنوان پارامتر ورودی دریافت می کند
//map  همان عمل قاچ کردن اندیس ها یا ایتم های آرایه هاست
let a = [12, 90, 14, 72, 89, 51]

let doubleNumbers = a.map(function (a) {
    return a * 2
})

console.log(doubleNumbers) // [24, 180, 28, 144, 178, 102]

let b = [12, 90, 14, 72, 89, 51]

let filteredScores = b.filter(function (b) {
    return b > 75
})

console.log(filteredScores) // [90, 89]

let fruits = ['🍎', '🍌', '🍈', '🍉', '🌶️', '🍊'];
let filteredData = fruits.filter((fruit) => {
    return fruit !== "🍉";
});
let watermelons = new Array(4).fill('🍉');
let results = filteredData.concat(watermelons);
document.getElementById("mytxt").innerHTML = results;

//What is an output?
// 1) 🍎,🍌,🍈,🍉,🌶️,🍊

// 2)🍌,🍌,🍌,🍈,🍈,🌶️,🌶️

// 3)🍉,🍈,🌶️,🍊,🍊,🍊,🍉

// 4)🍎,🍌,🍈,🌶️,🍊,🍉,🍉,🍉,🍉

document.getElementById("mytxt").innerHTML = newObject;
const sum = function () {
    return function sum(...args) {

        return args.reduce((a, b) => a + b);
    };
}();

console.log(sum(1, 2, 3, 4, 5));

const sa = "sajadgggggززggggبیdfبیبffdddgggdfddsdff";
console.log(sa);

const numd = 1;
console.log(numd);

const set = new Set();
set.add(5);
set.add('hello');
set.add({ name: 'ss' });
for (let item of set)
{
    console.log(item + 6)
};
let x=3;
function test(){
    var x=5;
    if (true) {
        var x = 7;
        console.log(x);
    }
  
    console.log(x);
}
test();

const numbers = [1, 2, 3, 4, 5];
var result = 0;
const maps = numbers.map((num) => {
    result += num * 2;
});
console.log(result);
const products={
    name:'socks',
    price:10,
    mark: 'tommy',
    rating: {
        stars: 4.5,
        count:98
    },
    fun: function fInsideObject() {
    console.log('function inside object');
        
    }
}
console.log(products.rating.stars);
 
//object+function=>method

console.log("7" == 7);
console.log(7 === "7");
console.log(7 != "7");
console.log(7 !== "7");



