// ITERATION 1

function updateSubtotal(product) {
   // console.log('Calculating subtotal, yey!');

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
    console.log(subtotalEl);
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    
    const allProduct = document.querySelectorAll('.product');
   // let sumAll = 0;
    //sumAll += allProduct;
    updateSubtotal(allProduct);
    /*
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    */
    // end of test

    // ITERATION 2
    //... your code goes here

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