// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;

  let SubTotal = price * quantity;
  // console.log(SubTotal);

  product.querySelector('.subtotal span').textContent = SubTotal;

  return SubTotal;
}

function calculateAll() {
  var products = document.getElementsByClassName('product');

  var total = 0;

  // ITERATION 2
  for (let product of products) {
    updateSubtotal(product);

    total += updateSubtotal(product);

  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = total;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
  let tbody = document.querySelector('#cart tbody');

  let theTr = target.parentNode.parentNode;


  tbody.removeChild(theTr);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let btn = document.querySelectorAll('.btn-remove');

  for (let element of btn) {
      element.addEventListener('click', removeProduct);
} 
});
