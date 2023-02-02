//http://localhost:3000/items

//define global variable for store data
let allProductsdata=[];
//define variable for store filters products
const filters = {
    searchItems:"",
};
//access to input tag
//select product-center div for append products to that
//select all buttons for search category when click button by user
const btns=document.querySelectorAll('.btn');
const productsDOM=document.querySelector('.product-center');
const searchInput=document.querySelector("#search");
document.addEventListener("DOMContentLoaded",()=>{
    console.log('loaded...');
    axios.get("http://localhost:3000/items")
    .then((res)=>{

        allProductsdata=res.data;
        renderProducts(res.data,filters);
    }).catch(err=>console.log(err));
    //render products  on DOM:

});

//define renderProducts Function
 function renderProducts(_products,_filters){
const filterProducts=_products.filter(p=>{
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
});
productsDOM.innerHTML='';
console.log(filterProducts);
//render to DOM:
//1.create an object
//2.create content
//3.add to .products(class products)
filterProducts.forEach((item,index) => {

    const productsDiv=document.createElement('div');
    
    productsDiv.classList.add('product');
    productsDiv.innerHTML=`
    <div class="product-img">
    <img src=${item.img} alt="${index}" />
    </div>
    <div class="product-desc">
    <div class="product-title">
      <h4>${item.title}</h4>
    </div>
    <div class="product-price">
      <p>${item.price}$</p>
    </div>
    </div>`;
    //append to prodoctsDOM:
 productsDOM.appendChild(productsDiv);
});
 
}

 //for equal searchInput to filters object with method searchItem:
 searchInput.addEventListener('input',(e)=>{
    filters.searchItems=e.target.value;
    renderProducts(allProductsdata,filters);
    console.log(e.target.value);
 });

 //btns is an object so we can use forEach method to itrate over that
 //forEach method takes 2 arguments, the first is btn
 //when user click each button
 btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        //get the value of the button
        const filter = e.target.dataset.filter;
        filters.searchItems=filter;
        console.log(filter);
        //call renderProducts function:
        renderProducts(allProductsdata,filters);
    })
});