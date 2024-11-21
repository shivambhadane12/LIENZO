// // Define the correct answer
const correctAnswer = "NEW20"; // Example correct answer
const items = document.getElementById("price");
// Add an event listener to the button
document.getElementById("checkButton").onclick = function() {
// Get the input element
const inputElement = document.getElementById("myInput");
// Get the value of the input
const inputValue = inputElement.value.trim();

// Get the result paragraph element
const resultElement = document.getElementById("result");

// Check if the input value matches the correct answer
const coupon_name = document.getElementById("coupon_name");
const Discount = document.getElementById("Discount");

const price = document.getElementById("price").innerHTML;
const final = document.getElementById("discounted_price");

const y = parseFloat(price.replace('₹', '').trim()); // Parse the price

if (inputValue === correctAnswer) {
    resultElement.textContent = "VERIFIED! 🎉";
    resultElement.style.color = "green"; // Optional: change text color
    coupon_name.textContent = "NEW20";

    // Calculate discount and final price
    const discount = 0.2 * y; // 20% discount
    const final_price = Math.max(0, y - discount); // Ensure final price doesn't go negative

    Discount.textContent = "₹" + discount.toFixed(2);
    items.textContent = "₹" + y.toFixed(2);
    final.textContent = "₹" + final_price.toFixed(2);
} else {
    resultElement.textContent = "NOT AVAILABLE. Try again!";
    resultElement.style.color = "red"; // Optional: change text color
}
};

// Get the initial price when the page loads
const first_price = document.getElementById("price").innerHTML;
const initialPrice = parseFloat(first_price.replace('₹', '').trim());

// Add an event listener for the SAVE button
document.getElementById("save").onclick = function() {
    // Get the quantity value
    const qty = document.getElementById("quaintity");
    const qty_value = parseInt(qty.value) || 1; // Default to 1 if empty

    // Calculate the updated price based on quantity
    const updatedPrice = initialPrice * qty_value;

    // Update the items text with the new price
    document.getElementById("price").textContent = "₹" + updatedPrice.toFixed(2);
    
    // Also update the total price based on the updated price
    const total_price = updatedPrice; // Update total price if needed
    document.getElementById("discounted_price").textContent = "₹" + total_price.toFixed(2);
};





