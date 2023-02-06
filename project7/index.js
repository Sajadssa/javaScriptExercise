//1. what view show to user based on routes:
//create function that do it called name router
function router() {
    //store all routes in const routes
    //all routes:dashboard,posts,products
    const routes = [
        { path: '/', view: () => console.log('dashboard page') },
        { path: '/posts', view: () => console.log('posts page') },
        { path: '/products', view: () => console.log('products page') },

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
    console.log(match.route.view());
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