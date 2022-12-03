//project shopping cart

const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".carts");
const backDrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".cart-item-confirm");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".cart");

const cartTotal = document.querySelector(".cart-total");

const cartItems = document.querySelector(".cart-items");
const clearCartBtn = document.querySelector(".clear-cart");
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

  getAddToCartBtns() {
    const addToCartBtns = document.querySelectorAll(".add-to-cart");

    const buttons = [...addToCartBtns];

    buttons.forEach((btn) => {
      // first take id from buttons
      //for achieve the best performance you should use of console.log() method
      const id = btn.dataset.id;
      // console.log(id);

      //check if this product id is in cart or not!
      // for doing this thing we use of the "FIND()" Method
      //find method telling us that whether product id in cart equal to product id when user clicked

      const isInCart = cart.find((p) => p.id === parseInt(id));
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

  addCartItem(cart) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `<div><img class="cart-item-img" src=${cart.imageUrl} /></div>
 <div class="cart-item-desc">
   <h4>${cart.name}</h4>
   <h5>$ ${cart.price}</h5>
 </div>
 <div class="cart-item-controller">
   <i class="fas fa-chevron-up" data-id=${cart.id}></i>
   <p class="item-quantity">${cart.quantity}</p>
   <i class="fas fa-chevron-down" data-id=${cart.id}></i>
 </div>
 <i class="fas fa-trash-alt remove-item" data-id=${cart.id}></i>
 `;
    cartContent.appendChild(div);
  }
  setupApp() {
     cart = Storage.getCart()||[];
     cart.forEach((cartItem)=>this.addCartItem(cartItem));
    this.setCartValue(cart);
    
  }
  cartLogic() {
    // clear cart button
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });

    // cart functionality
    cartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-item")) {
        const removeItem = event.target;
        const id = removeItem.dataset.id;
        console.log(id);
        // remove from DOM :
        // console.log(removeItem.parentElement);
        
        cartContent.removeChild(removeItem.parentElement);

        // remove item from cart not DOM !
        this.removeItem(id);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        const addQuantity = event.target;
        const id = addQuantity.dataset.id;
        const addedItem = cart.find((c) => c.id == id);
        addedItem.quantity++;
        // update storage
        Storage.saveCart(cart);
        // update total price
        this.setCartValue(cart);
        // update item quantity :
        // console.log(addQuantity.nextElementSibling);
        addQuantity.nextElementSibling.innerText = addedItem.quantity;
      } else if (event.target.classList.contains("fa-chevron-down")) {
        const subQuantity = event.target;
        const id = subQuantity.dataset.id;
        const substractedItem = cart.find((c) => c.id == id);

        if (substractedItem.quantity === 1) {
          this.removeItem(id);
          cartContent.removeChild(subQuantity.parentElement.parentElement);
          return;
        }

        substractedItem.quantity--;
        // update storage
        Storage.saveCart(cart);
        // update total price
        this.setCartValue(cart);
        // update item quantity :
        // console.log(subQuantity.nextElementSibling);
        subQuantity.previousElementSibling.innerText = substractedItem.quantity;
      }
    });
  }


  clearCart() {
    // loop on all the item and tigger remove for each one
    cart.forEach((item) => this.removeItem(item.id));
    // console.log(cartContent.children[0]);
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }
    closeModalFunction();
  }

  removeItem(id) {
    // resuable method for signle remove and clear all
    cart = cart.filter((cartItem) => cartItem.id !== id);
    this.setCartValue(cart);
    Storage.saveCart(cart);
    // const button = this.getSingleButton(id);
    // button.disabled = false;
  //   button.innerHTML = `<i class="fas fa-shopping-cart"></i>
  //  add to cart`;
  }
  
  // getSingleButton(id) {
  //   // should be parseInt to get correct result
  //   return buttonsDOM.find((btn) => parseInt(btn.dataset.id) === parseInt(id));
  // }
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
  // set up already added cart items
  ui.setupApp();
  //products added to displayProducts class
  // now we can access to buttons
  ui.getAddToCartBtns();
   Storage.saveProducts(productsData);
  ui.cartLogic();
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
