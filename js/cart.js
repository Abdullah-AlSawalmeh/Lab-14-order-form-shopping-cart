/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  const tbody = table.querySelector('tbody');
  tbody.innerHTML = ' ';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tbody = table.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    let tdd = document.createElement('td');
    let tdq = document.createElement('td');
    let tdi = document.createElement('td');
    tdd.innerHTML = 'Delete'
    tdd.id = i;
    tdi.innerHTML = cart.items[i].product;
    console.log(tdi);
    tdq.innerHTML = cart.items[i].quantity;
    console.log(tdq);
    tbody.appendChild(tr);
    tr.appendChild(tdd)
    tr.appendChild(tdi)
    tr.appendChild(tdq)

  }
}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  cart.removeItem(cart.items[event.target.id])


  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
