
//DEFINE ARRAY 

const reviews = [
    {
        id: 1,
        name: "sajad aseedi",
        job: "web designer",
        img: "https://avatars.githubusercontent.com/u/55943862?v=4",
        text: "with extensive knowledge and years of experience,working in web technologies and 'Ui/ Ux' design, delivering quality work.Fluent in designing and implementing databases",

    }
    ,
    {
        id: 2,
        name: "sara jones",
        job: "video creator",
        img: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
        text: "The best client for a testimonial video is a person that is as great for your business as your business is for them. This person should fit perfectly into your ideal client persona, and if you don’t have one"
    },
    {
        id: 3,
        name: "kate hamilton",
        job: "bloger",
        img: "https://uploads-ssl.webflow.com/624b3c6529144e0e11858765/627ee40636db9a7b2917c405_so.png",
        text: "hat’s the problem we help solve. We have created the vidwheel Creator Network,  a community where entrepreneurs and consultants representing all industries can come together to master"
    },
    {
        id: 4,
        name: "cheerful man",
        job: "project manager",
        img: "https://thumbs.dreamstime.com/b/cheerful-man-29173421.jpg",
        text: "you had to create an engaging, professional video for your business today, could you pull it off? If you’re like many consultants and other business professionals"
    },


];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item

let currentItem = 0;
//lrad initial item
window.addEventListener('DOMContentLoaded', function () {

    showPerson();

});

//show person based on item

function showPerson() {

    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {

    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click", function () {

    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random prson
randomBtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson( );

})



