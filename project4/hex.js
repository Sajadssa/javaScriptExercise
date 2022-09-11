const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//show hwx number in js: #f15025 combinator # with 6 number

const btn=document.getElementById("btn");

const color=document.querySelector(".color");

const containers = document.querySelector(".container");
const nav = document.querySelector("nav");


btn.addEventListener("click",()=>{

    let hexColor='#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()];
       
   
    }
    containers.style.transition="1s"
 
    btn.style.color = hexColor;
    containers.style.backgroundColor = hexColor;
    nav.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    
   
})
function getRandom(){
   
    
    return Math.floor(Math.random()*hex.length) ;
    
} 
 


