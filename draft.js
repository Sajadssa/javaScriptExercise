
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
            // resolve("title is react");
            reject(new Error ("this in an error"));
    
    
        }, 1000);
    });

}

//consume promise for above example
// loginUser("sajad@ex.com",1234)
// .then((user)=>getUserCourses(user.email))
// .then((courses=>getDetailCourses(courses[0])))
// .then((detail)=>console.log(detail));

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

//async await
//1.first expression function
//  async function getCourseDetail(){
//     const user=await loginUser({email:"sajad@gmail.com"});
//     console.log(user);
//     const courses = await getUserCourses(user.email);
//     console.log(courses);
//     const detail=await getDetailCourses(courses[0]);
// console.log(detail);
//  }
//  getCourseDetail();

 //1.arrow function async await
 //2.error handling in async-await
 const getCourseDetail=async()=>{
    try {
        const user=await loginUser({email:"sajad@gmail.com"});
        console.log(user);
        const courses = await getUserCourses(user.email);
        console.log(courses);
        const detail=await getDetailCourses(courses[0]);
    console.log(detail);
        
    } catch (error) {
        console.log(error.message);
    }

 }
 getCourseDetail();

 //112.fetch api-axios-saheb mohammadi
 const getBtn=document.querySelector(".get-data");
 const postBtn=document.querySelector(".post-data");

 //function declaration
 function getData(){
    // fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    //     // console.log(response.userData);
    //     return response.json();
    // }).then(data=>console.log(data));
//axios
axios.get('https://jsonplaceholder.typicode.com/users').then
(res=>console.log(res.data));
    
 }

 //post data to backend

 function postData(){
    //1.define data 
    const userData = {
        id:1,
        name:"sajad",
        username:"sajadssa",
        email:"sajad@gmail.com",
    }

    fetch("https://jsonplaceholder.typicode.com/users",
    {method:"POST",
body:JSON.stringify(userData),
headers:{"content-type":"application/json"}
}).
then((response)=>{return response.json()}).
then(data=>console.log(data));
   


 }

getBtn.addEventListener("click",getData);
postBtn.addEventListener("click",postData);

 //------------------------put-delete-headers
function deleteUser(){
    // fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    //     // console.log(response.userData);
    //     return response.json();
    // }).then(data=>console.log(data));
//axios
axios.get('https://jsonplaceholder.typicode.com/users/1').then
(res=>console.log(res.data));
    
 }

 //post data to backend

 function putUser(){
    //1.define data 
    const userData = {
        id:1,
        name:"sajad",
        username:"sajadssa",
        email:"sajad@gmail.com",
    }
    const headers = {
        headers:'authorization:'`${token}`
    }

    fetch("https://jsonplaceholder.typicode.com/users/1",
    {method:"POST",
body:JSON.stringify(userData),
headers
}).
then((response)=>{return response.json()}).
then(data=>console.log(data));
   


 }

getBtn.addEventListener("click",deleteUser);
postBtn.addEventListener("click",putUser);

 