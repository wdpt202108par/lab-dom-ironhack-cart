// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //STEP 1
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(price, quantity);

  //STEP 2 & 3
  let priceEl = Number(price.innerHTML);
  let quantityEl = Number(quantity.value);
  let subtotalPrice = priceEl * quantityEl;
  console.log(priceEl, quantityEl, subtotalPrice);

  //STEP 4
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  console.log(subtotal);
  return subtotalPrice;
  //... your code goes here
}

// ITERATION 2 & ITERATION 3

function calculateAll(){
  var sum = 0;
  const products = cart.getElementsByClassName('product');
  for(let i = 0; i < products.length; i++){
    sum += updateSubtotal(products[i]);
    console.log(products[i]);
  }
  const total = document.querySelector('#total-value span');
  console.log(total);
  total.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
