
const colors = ["green", "Blue", "rgba(133,122,200)", "#f15025"];

const btns = document.getElementById("btn");

const color = document.querySelector(".color");
const containers=document.querySelector(".container");
const nav=document.querySelector("nav");
 

btns.addEventListener("click",()=>{

    const randomNumber=getRandomNumber();
   containers.style.backgroundColor=colors[randomNumber];
    nav.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];

    
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);

}

