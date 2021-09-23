// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;

  let SubTotal = price * quantity;
  // console.log(SubTotal);

  product.querySelector('.subtotal span').textContent = SubTotal;
}

function calculateAll() {
  var products = document.getElementsByClassName('product');

  // ITERATION 2
  for (let product of products) {
    updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
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
