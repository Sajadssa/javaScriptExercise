
console.log('start');
//login:email,pass=>api call

//1-
function loginUser(email, password) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('data is ready');
            //return {user.email: email}
            resolve({ email });
        }, 1000);
    })

}

//second function for getting courses by email




//2-

function getUserCourses(email) {
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
            resolve(["course 1", "course 2", "course 3", "course 4"]);
    
    
        }, 1000);
    });

}
//3-function for retrieve detail courses

function getDetailCourses(id) {
    return new Promise((resolve,reject)=>{


        setTimeout(() => {
            resolve("title is react");
    
    
        }, 1000);
    });

}

//consume promise for above example
loginUser("sajad@ex.com",1234)
.then((user)=>getUserCourses(user.email))
.then((courses=>getDetailCourses(courses[0])))
.then((detail)=>console.log(detail));

// const user= loginUser("sajadex@gmail.com",1234,(user)=>{
// console.log(user.email);
// //call getUserCourses function 
// getUserCourses(user.email,(courses)=>{
//     console.log(courses);
//     //call getDetailCourse function 
//     getDetailCourses(courses[0],(title)=>{
//         console.log(title);
//     })
// });






// });

//REFACTOR CODE WITH PROMISE





console.log('end');

//promise in js
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false;
//         if (!error) {

//             resolve("title course is react.js");
//         }
//         else {

//             reject(new Error("User is not logged in"));
//         }

//     }, 3000);
// });


// //consume promise
// promise
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));