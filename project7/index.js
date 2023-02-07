//1. what view show to user based on routes:
//create function that do it called name router
import Dashboard from './pages/Dashboard.js';
import Posts from './pages/Posts.js';
import Products from './pages/Products.js';
function router(params) {
    //store all routes in const routes
    //all routes:dashboard,posts,products
    const routes = [
        { path: './project7', view: Dashboard },
        { path: './posts', view: Posts },
        { path: './products', view: Products },

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
            route: { path: '/not-found', view: () => console.log('not-found') },
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