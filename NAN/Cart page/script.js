// Update quantity and total for each product
function changeQuantity(button, amount) {
    const quantityElement = button.parentNode.querySelector("span");
    let quantity = parseInt(quantityElement.innerText);
    quantity += amount;
    if (quantity < 0) quantity = 0;
    quantityElement.innerText = quantity;

    // Update total price for each product
    const price = parseFloat(button.closest(".product-info").querySelector(".price").innerText.replace("$", ""));
    const totalPriceElement = button.closest(".product-info").querySelector(".total-price");
    totalPriceElement.innerText = `$${(price * quantity).toFixed(2)}`;

    updateCartTotal();
}

// Calculate and update the cart total
function updateCartTotal() {
    let subtotal = 0;
    document.querySelectorAll(".total-price").forEach(item => {
        subtotal += parseFloat(item.innerText.replace("$", ""));
    });

    const discount = 4.00; // Fixed discount
    const total = subtotal - discount;

    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

// Apply discount on coupon (Placeholder function)
document.getElementById("apply-coupon").addEventListener("click", () => {
    alert("Coupon applied!");
});
