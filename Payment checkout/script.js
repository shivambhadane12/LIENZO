// Set initial prices for the products
const product1Price = 99.00;
const product2Price = 49.00;

// Elements for quantity and total price display
const quantity1Input = document.getElementById('quantity1');
const quantity2Input = document.getElementById('quantity2');
const totalPrice1Display = document.getElementById('total-price1');
const totalPrice2Display = document.getElementById('total-price2');
const combinedTotalPriceDisplay = document.getElementById('combined-total-price');

// Function to update total price for a product based on quantity
function updateTotalPrice(quantityInput, pricePerUnit, totalPriceDisplay) {
    const quantity = parseInt(quantityInput.value) || 1;  // Default to 1 if empty or invalid
    const totalPrice = quantity * pricePerUnit;
    totalPriceDisplay.textContent = totalPrice.toFixed(2); // Display price with two decimal places
    updateCombinedTotal(); // Update the combined total price
}

// Function to update the combined total price
function updateCombinedTotal() {
    const total1 = parseFloat(totalPrice1Display.textContent) || 0;
    const total2 = parseFloat(totalPrice2Display.textContent) || 0;
    const combinedTotal = total1 + total2;
    combinedTotalPriceDisplay.textContent = combinedTotal.toFixed(2); // Display combined total with two decimal places
}

// Event listeners for quantity inputs
quantity1Input.addEventListener('input', () => {
    updateTotalPrice(quantity1Input, product1Price, totalPrice1Display);
});

quantity2Input.addEventListener('input', () => {
    updateTotalPrice(quantity2Input, product2Price, totalPrice2Display);
});

// Initialize the total prices on page load
updateTotalPrice(quantity1Input, product1Price, totalPrice1Display);
updateTotalPrice(quantity2Input, product2Price, totalPrice2Display);