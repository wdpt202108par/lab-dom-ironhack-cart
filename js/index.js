// ITERATION 1
function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');
    //product = [tr.product, tr.product]

    //STEP 1
    let priceEl = product.querySelector('.price span');
    let quantityEl = product.querySelector('.quantity input');
    // console.log(priceEl, quantityEl);

    //STEP 2 & 3
    let price = Number(priceEl.innerHTML); // j'extrais la valeur de mon élément
    let quantity = Number(quantityEl.value); // accéder à la valeur du champs saisie par l'user
    let subtotal = price * quantity; // 75

    //console.log(price, quantity, subtotal);
    // STEP 4
    let subtotalEl = product.querySelector('.subtotal'); // <span>0</span>
    subtotalEl.innerHTML = subtotal;
    return subtotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.

    const allProducts = document.querySelectorAll('.product');
    let sumproduct = 0
    allProducts.forEach(function(product) {
        sumproduct += updateSubtotal(product)
    })
    // ITERATION 2
    //... your code goes here

    totalValue.innerHTML = sumproduct;
}
// ITERATION 3

const totalValue = document.querySelector('#total-value span');

// Bonus
// ITERATION 4 
function removeProduct(event) {
    const target = event.currentTarget; //button
    let removeSubtotal = target.parentNode.parentNode;
    removeSubtotal.remove();
    console.log('The target in remove is:', target);
    //target.parentNode.removeChild(target);
    //... your code goes here
}

var removeBtn = document.getElementsByClassName('btn btn-remove');
for (var i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
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