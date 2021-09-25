// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let SubTotal = price * quantity;

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
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let tbody = document.querySelector('#cart tbody');
  let theTr = target.parentNode.parentNode;

  tbody.removeChild(theTr);

}

// ITERATION 5

function createProduct() {
  let product = document.querySelectorAll(".create-product input");
  let productName = product[0].value;
  let productPrice = product[1].value;
  let tbody = document.querySelector("#cart tbody");
  let newRow = document.querySelector("#cart tbody .product").cloneNode(true);
  newRow.querySelector(".name span").innerHTML = productName;
  newRow.querySelector(".price span").innerHTML = productPrice;

  tbody.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let btn = document.querySelectorAll('.btn-remove');

  for (let element of btn) {
      element.addEventListener('click', removeProduct);
  }

  let create = document.querySelector("#create");

  create.addEventListener("click", createProduct);
});
