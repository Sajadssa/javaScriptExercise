const body=document.querySelector("body");

let data = [
    { name: "sajad",age: 34 },
    { name: "hamed",age: 41},
    { name: 'amir', age: 32 },
    { name: 'mostafa', age: 45 },
    { name: 'mahmoud', age: 43 },
    { name: 'ali', age: 22 },
   

];


let details=data.map(function(item){

return'<div>'+item.name +' is'+' '+ item.age +' '+ "year's old" +'</div>';
  

});
console.log(details);
info.innerHTML=details.join('\n');

// const students = [
//     { name: "Ali Rafati", class: "A1", birth_year: 1995 },
//     { name: "Reza Molaei", class: "A1", birth_year: 1994 },
//     { name: "Sadegh Ahmadi", class: "A2", birth_year: 1996 }
// ];

// const studentsWithAge = [];
// const currentYear = new Date().getFullYear();
// for (let index = 0; index < students.length; index++) {
//     const age = currentYear - students[index].birth_year;
//     studentsWithAge.push({ ...students[index], age });
// }
//map method is similary to For LOOP that navigation inside  array for access to all members of array

// const currentYear = new Date().getFullYear();
// const studentsWithAge = students.map(student => {
//     const age = currentYear - student.birth_year;
//     return { ...student, age };
// });

//  console.log(studentsWithAge);

// const numbers = [1, 2, 3, 4];
// const numbersPowerTwo = numbers.map(number => Math.pow(number, 2));
// console.log(numbers);     //[1,2,3,4]
// console.log(numbersPowerTwo);     //[1,4,9,16]

//******----> */ array.forEach(function(currentValue, index, arr), thisValue)

// const users=[
// {name:'sajad',age:34},
// {name:'ali',age:25},
// {name:'farhad',age:21},
// ];
 

// const userNew=[];

// for (let index = 0; index < users.length; index++) {

//     const userUP = users[index].name.toUpperCase();

//     userNew.push({...users[index],userUP});

// }

// console.log(userNew);

// const user1=[];
// users.forEach((item,index)=>{
//     const itemt = users[index].name.toUpperCase();
//     const userout = user1.push({ ...users[index], itemt});

// });
// console.log(user1);

// // Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// let text = "";
// for (const x of fruits.entries()) {
//     text += x + "<br>";
// }

// console.log(text);
//myArray.map((value , index , array) => // ... ) 

// const user2=[];
// const u2=users.map(user=>user.name.toUpperCase());
// console.log(u2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] % 2 !== 0) {
//         oddNumbers.push(numbers[index]);
//     }
// }
// console.log(oddNumbers);

// const oddnum=[];
// numbers.forEach((item,index=0)=>{
//     if(numbers[index] % 2!==0) {
//      oddnum.push(numbers[index]);
//     }
// });

//map is easy for navigation members of array
// numbers.map((item) =>(item %2!==0)? console.log(item):"false");

// numbers.map((i)=>(i % 2 ===0)? console.log(i):"false");

// numbers.forEach((value)=>(value %2===0)? console.log(value):"false");

// console.log(oddnum);
// body.innerHTML=r;

// const filteredItems = items.filter((item, index, array) => {return true/false} =====filter

// const oddN=numbers.filter(item =>item % 2 !==0);
// console.log(oddN);


const students = [
    { name: "Ali Rafati", class: "A1", birth_year: 1995 },
    { name: "Reza Molaei", class: "A1", birth_year: 1994 },
    { name: "Sadegh Ahmadi", class: "A2", birth_year: 1996 }
];

//add age property(object) to the array,calculation age and push to new Array
//filter on base condition
const date = new Date().getFullYear();
const newStu=[];

const studentsWithAge = students.map(student => {
    const age = date - student.birth_year;
    return { ...student, age };
}).filter(student => (student.age>27));

console.log(studentsWithAge);

 





 
    











