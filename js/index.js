// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;

  let subtotalPrice = priceValue * quantityValue;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

// ITERATION 2
// call the function updateSubtotal with every tr.product DOM node in the table#cart
  let products= document.getElementsByClassName('product');
 
// ITERATION 3
  let totalPrice = 0;
  for (let i=0; i<products.length; i++) {
    totalPrice += updateSubtotal(products[i]);
  }

  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML= `${totalPrice}`;
    return totalPrice;   
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let productLigne = document.getElementsByClassName('.product');
  let parent = document.querySelectorAll('#tbody');
  parent.removeChild(productLigne);
}

const removeButtons = document.querySelectorAll('.btn-remove'); // [ <button>, <button>, ... ]
for ( let i = 0 ; i < removeButtons.length ; i ++ ) {
  removeButtons[i].addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
