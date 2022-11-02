//project shopping cart

const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".carts");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".cart-item-confirm");

const productsDOM = document.querySelector(".cart");

const cartTotal = document.querySelector(".cars-total");

const cartItems = document.querySelector(".carts-item");

let cart = [];

// const showModal = document.querySelector('.show-modal');

 

//for understand shopping cart we defines empty an array
// console.log(addtocartBtns);

// 1.get products

import { productsData } from "./products.js";

// for get products we should be create class products
//because all of the things in js are object
//we coding on based object orientation programming
//in this method we should simulation anything at computer

// first we define class: class its collection of properties and methods(behavior)

// for access properties and methods on  a class we can instance from that class with use of new keyword
// or you can uses from static method

//ok let's started

class Products {
   getProducts() {
    // get from api and point!
    // when calling this method thats time loaded web browser
    return productsData;
  }
}

// 2.display

//for show class products we can defines class UI

class UI {
  //take div  thats introduce products from html and iterate forEach loop on each items  are that productsdata

  //but we must dynamic img src ,id,product name and price
  //we can do it by baktic and define method that take div from html
  displayProducts(products) {
    let result = "";
    products.forEach((item) => {
      result += `<div class="cart-shopping">
        <div class="cart-title">
          <h4>${item.name}</h4>
        </div>
        <div class="cart-img">
          <img src=${item.imageUrl}  />
        </div>
        <div class="cart-info">
          <p class="cart-price">Price: ${item.price}$</p>
          <button class="btn add-to-cart" data-id=${item.id}>Add to Cart</button>
        </div>
      </div>`;
      //we should append this result to div thats parents div here name is  div with classes name cart
      productsDOM.innerHTML = result;
      
    });
  }

  //we can defines method for access to buttons

  getAddtocartBtns() {
    const addtocartBtns = document.querySelectorAll(".add-to-cart");

    const buttons = [...addtocartBtns];


    buttons.forEach((btn) => {
      // first take id from buttons
      //for achieve the best performance you should use of console.log() method
      const id = btn.dataset.id;
      // console.log(id);

      //check if this product id is in cart or not!
      // for doing this thing we use of the "FIND()" Method
      //find method telling us that whether product id in cart equal to product id when user clicked

      const isInCart = cart.find((p) => p.id === id);
      if (isInCart) {
        btn.innerText = "In Cart";
        btn.disabled = true;
      }
      //else we add to that product id not exist inside cart
      //how do it? use of addEventListener method the buttons
      //in this method when user clicked button we take target element
      //target element is one of the property event that is parameter callback function

      //this code for those products that not exist into cart
      btn.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";

        //when after adding product to cart disabled button
        event.target.disabled = true;

        // console.log(event.target.dataset.id);
        //when user clicked must be add to cart this product
        // first get product from local storage that is name products we done it step before "get product from products":
        //convert to an object
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };

        // console.log(addedProduct);

        //add product to cart
        //with speared operators we adding product to array that is name cart --speared operators clone from old value and new value after ... points such as [...old,new]
        // we can also use of push method

        //first we cal let variable for define cart array for update it
        //addedProduct is one of the object to add new object to addedProduct in this speared operators

        cart = [...cart, addedProduct];
        //quantity:1 to know that added first time
        // console.log(cart);

        //save cart to local storage

        Storage.saveCart(cart);

        //update cart value-computed total price
        //add to cart item --add to modal
        //this keyword reference to class UI
        this.setCartValue(cart);
        //that added user to dom should be set
        this.addCartItem(addedProduct);

      });
    });
    // With use of the forEach Method when reloaded web browser we checked that which id exist in cart or not
    //if have exist id in cart not necessary button Add to cart and we change innerText or textContent The button To "Add in"
    // console.log(buttons);
    //The NodeList converted to an array that now we can get it dataset by id

    //now we should be convert NodeList to an array and is the best way use of spread operators
    // console.log(addtocartBtns);
  }

  getCartBtns() {
    const addToCartBtns = [...document.querySelectorAll(".add-to-cart")];
    buttonsDOM = addToCartBtns;
    addToCartBtns.forEach((btn) => {
      const id = btn.dataset.id;
      const isInCart = cart.find((item) => item.id === id);
      if (isInCart) {
        btn.innerText = "In Cart";
        btn.disabled = true;
      }
      btn.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        // 1. get product from products
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };

        // 2. add product to cart
        cart = [...cart, addedProduct];
        // 3. save cart in local storage
        Storage.saveCart(cart);
        // 4. set cart values
        this.setCartValue(cart);
        // 5. display cart item
        this.addCartItem(addedProduct);
        // 6. show the cart
      });
    });
  }
  //define method

  // setCartValue(cart) {
  //   // 1. cart items

  //   //2 . total price

  //   //we can use Reduce method for computing cart item and total price
  //   let tempCartItems = 0;
  //   const totalPrice = cart.reduce((acc, curr) => {
  //     tempCartItems += curr.quantity; //2
  //     return acc + curr.quantity * curr.price;
  //   }, 0);
  //   cartTotal.innerText = `TotalPrice : ${totalPrice} $`;
  //   // console.log(cartTotal);
  //   cartItems.innerText = tempCartItems;
  //   showModal.innerText = tempCartItems;
  //   // console.log(tempCartItems);
  // }

  setCartValue(cart) {
    let tempCartItems = 0;
    const totalPrice = cart.reduce((acc, curr) => {
      tempCartItems += curr.quantity;
      return curr.quantity * curr.price + acc;
    }, 0);
    cartTotal.innerText = `total price : ${parseFloat(totalPrice).toFixed(
      2
    )} $`;
    cartItems.innerText = tempCartItems;
  }
  // addCartItem(cartItem) {
  //   //create second div for add to new product in cart
  //   const div = document.createElement('div');
  //   div.classList.add('.carts-item');
  //   div.innerHTML = ` <div class="carts-item">
  //         <img class="carts-item-img" src=${cartItem.imageUrl} />
  //         <div class="carts-item-desc">
  //           <h4>${cartItem.name}</h4>
  //           <h5>${cartItem.price}</h5>
  //         </div>
  //         <div class="carts-item-controller">
  //           <button class="btn up">+</button>
  //           <p>${cartItem.quantity}</p>
  //           <button class="btn down">-</button>
  //         </div>
  //       </div>`;

  //   //we add to carts-content this new div that show new product
  //   cartContent.appendChild(div);

  // }

  addCartItem(cart) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<div><img class="cart-item-img" src=${cart.imageUrl} /></div>
 <div class="cart-item-desc">
   <h4>${cart.title}</h4>
   <h5>$ ${cart.price}</h5>
 </div>
 <div class="cart-item-controller">
   <i class="fas fa-chevron-up" data-id=${cart.id}></i>
   <p class="item-quantity">${cart.quantity}</p>
   <i class="fas fa-chevron-down" data-id=${cart.id}></i>
 </div>
 <i class="fas fa-trash remove-item" data-id=${cart.id}></i>
 `;
    cartContent.appendChild(div);
  }
}

// 3.save local storage

// for keep data when refresh web browser should be saves thats in local storage at located web browser

// class Storage {
//   // save gotten products from module products.js in local storage by this method

//   static saveProducts(products) {
//     // note: when we use from static needn't to new keyword for callback method class anymore
//     //go to local storage and set data with specific name here is that names products
//     // note: in local storage we can save only strings and we can't save in that arrays or objects
//     // and JSON.stringify for convert array to string
//     localStorage.setItem("products", JSON.stringify(products));
//   }
//   //because product is into local storage we must be defines the method (that its getting the product) in here
//   static getProduct(id) {
//     //for use information that exist in local storage(for get item from local storage) JSON should be this way
//     //products same is name we use in set method in local storage
//     // and we put result it in one variable that is name _products

//     const _products = JSON.parse(localStorage.getItem("products"));
//     // console.log(_products);
//     return _products.find((p) => p.id === parseInt(id));
//     //it return is object

//   }
//   //for save updated cart in local storage
//   //for save item in local storage we should use this method

//   static saveCart(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }
// }

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    const _products = JSON.parse(localStorage.getItem("products"));
    return _products.find((p) => p.id == id);
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

// get productsdata when loaded dom we must show UI For users

document.addEventListener("DOMContentLoaded", () => {
  // console.log('loaded');
  //logs data
  //for logs products we should instance from class itself

  const products = new Products();
  const productsData = products.getProducts();
  // console.log(productsData);
  // now we should be show products
  //for show products we can use constructor method or instance from class itself here is that Names UI
  // And  we callback displayProducts method
  const ui = new UI();
  ui.displayProducts(productsData);
  //products added to displayProducts class
  // now we can access to buttons
  ui.getAddtocartBtns();

  Storage.saveProducts(productsData);
});

//4 . we should specified the products which user clicked button product and we compare this button to all buttons in local storage if id cart was exist in local storage does not need to add to cart
// if was not id cart in carts we add to carts
// first we take all buttons

//when we access to buttons after show all of them in DOM
//OK We write continue coding in class ui after displayProducts Method

//show modal=>click=>
//opacity=>1;backdrop=>block


function showModalFunction() {
  backDrop.style.display = "block";
  cartModal.style.opacity = "1";
  cartModal.style.top = "20%";

}

function closeModalFunction() {
  backDrop.style.display = "none";
  cartModal.style.opacity = "0";
  cartModal.style.top = "-100%";
}

cartBtn.addEventListener("click", showModalFunction);
closeModal.addEventListener("click", closeModalFunction);
backDrop.addEventListener("click", closeModalFunction);


// confrimModal.addEventListener("click", () => {
//   modal.style.opacity = "0";
//   alert(" hi world!");
// });


// closeModal.addEventListener("click", closeModalFunction);



//for make models any thing that exist at reality world in computer we need to class that thing

