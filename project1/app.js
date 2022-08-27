const closedFace = document.querySelector(".closed");
const opendFace = document.querySelector(".open");
const containrs = document.querySelector('.container');
const body = document.querySelector("body");
const p = document.createElement('p');

//add event listner

closedFace.addEventListener("click", () => {
    if (opendFace.classList.contains("open")) {
        opendFace.classList.add('active');
        closedFace.classList.remove('active');
        containrs.style.boxShadow = "0 25px 32px 0 yellow";
        body.style.backgroundImage = "url('https://media.istockphoto.com/photos/sunflare-on-road-picture-id94502345')";
        p.textContent = 'Good Morning';
        p.style.fontSize = "30px";
        p.style.color = "yellow";
        p.style.top = "10px";
        p.style.fontWeight = "700";
        containrs.appendChild(p);
    }
});

opendFace.addEventListener("click", () => {

    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        opendFace.classList.remove('active');
        containrs.style.boxShadow = "0 25px 45px 0 rgba( 0, 0, 255, .7 )";
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')";
        p.textContent = 'Good Night';
        p.style.fontSize = "30px";
        p.style.color = "blue";
        p.style.fontWeight = "700";
        containrs.appendChild(p);


    }
})

