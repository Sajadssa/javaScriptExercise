
console.log('start');
//login:email,pass=>api call

function loginUser(email, password,callback){
    setTimeout(() => {
        console.log('data is ready');
        //return {user.email: email}
        callback({email});
    }, 3000);
}

//second function for getting courses by email






function getUserCourses(email,callback){
   setTimeout(() => {
    callback (["course 1","course 2","course 3","course 4"]);

    
   }, 2000);

}
const user= loginUser("sajadex@gmail.com",1234,(user)=>{
console.log(user.email);
//call getUserCourses function 
getUserCourses(user.email,(courses)=>{
    console.log(courses);
});

    

});

console.log('end');

//promise in js
const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error=false;
        if(!error){

            resolve("title course is react.js");
        }
        else{

            reject(new Error("User is not logged in"));
        }
        
    }, 2000);
});


//consume promise
promise
.then((data)=>console.log(data))
.catch((error)=>console.log(error.message));