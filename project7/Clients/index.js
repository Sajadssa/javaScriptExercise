//1. what view show to user based on routes:
//create function that do it called name router
import Dashboard from './pages/Dashboard.js';
import Posts from './pages/Posts.js';
import Products from './pages/Products.js';
import notFound from './pages/NotFound.js';
function router(params) {
    //store all routes in const routes
    //all routes:dashboard,posts,products
    const routes = [
        { path: '/', view:Dashboard },
        { path: '/posts', view: Posts },
        { path: '/products', view: Products },

    ];

    //create map method for change routes
    const potionalRoutes = routes.map((item) => {
        return {
            route: item,
            isMatch: location.pathname === item.path,
        }
    })
    console.log(potionalRoutes);
    let match = potionalRoutes.find((route) => route.isMatch);
    if (!match) {
        match = {
            route: { path: '/not-found', view:notFound },
            isMatch: true,

        }
    }
    // console.log(match.route.view());
    // show page that which click user on the link
    document.querySelector("#app").innerHTML=match.route.view();
}
function navigateTo(url){
    history.pushState(null,null,url);
    router();
}
// attach popstate to window when changes history browser
window.addEventListener('popstate',router);
document.addEventListener("DOMContentLoaded", () => {
document.body.addEventListener("click",(e)=>{
console.log(e.target);
if(e.target.matches("[data-link]")){
e.preventDefault();
// console.log(e.target.href);
navigateTo(e.target.href);
}

})
    router();
});

// sidebar toggler

//select an sidebarToggler
const sidebarToggler=document.querySelector('.sidebar-toggler');
const sidebar=document.querySelector('.nav');
// select root in js
const root=document.documentElement;
// addEventListener click on chevron-right
sidebarToggler.addEventListener('click',()=>{
sidebar.classList.toggle('mini-sidebar');
// control root property by js
// when make class mini-sidebar is created
if(sidebar.classList.contains('mini-sidebar')){
   root.style.setProperty("--nav-width",70 +'px');
}
else{
    root.style.setProperty("--nav-width",250+'px');
}


})