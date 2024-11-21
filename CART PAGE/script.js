// Sample cart data to hold items
let cartItems = [
    {
      id: 1,
      name: "Floral Print Wrap Dress",
      color: "Blue",
      size: "42",
      price: 20.5,
      quantity: 2,
      imgSrc: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Floral Print Wrap Dress",
      color: "Blue",
      size: "42",
      price: 30.5,
      quantity: 1,
      imgSrc: "https://via.placeholder.com/100"
    }
  ];
  
  // Set initial discount values
  let discountPercentage = 0;
  let maxDiscount = 0;
  
  // Function to render cart items
  function renderCart() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear previous items
  
    cartItems.forEach(item => {
      // Calculate total price for each item
      const totalPrice = item.price * item.quantity;
  
      // Create HTML for each item
      const productHTML = `
        <div class="product-item">
          <img src="${item.imgSrc}" alt="${item.name}">
          <div class="product-info">
            <h4>${item.name}</h4>
            <p>Color: ${item.color}, Size: ${item.size}</p>
            <p class="price">$${item.price.toFixed(2)}</p>
            <div class="quantity">
              <button class="minus" onclick="changeQuantity(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="plus" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <p class="total-price">$${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      `;
      productList.insertAdjacentHTML('beforeend', productHTML);
    });
  
    // Initial calculation for total
    updateCartTotal();
  }
  
  // Function to add a new product to the cart
  function addProduct(name, color, size, price, quantity, imgSrc) {
    const newProduct = {
      id: cartItems.length + 1, // Unique ID
      name: name,
      color: color,
      size: size,
      price: price,
      quantity: quantity,
      imgSrc: imgSrc || "https://via.placeholder.com/100" // Default image
    };
    cartItems.push(newProduct);
    renderCart(); // Re-render the cart to display the new product
  }
  
  // Update quantity and total for each product
  function changeQuantity(id, amount) {
    const product = cartItems.find(item => item.id === id);
    if (product) {
      product.quantity += amount;
      if (product.quantity < 1) product.quantity = 1; // Ensure minimum quantity is 1
    }
    renderCart(); // Re-render the cart to reflect changes
  }
  
  // Calculate and update the cart total
  function updateCartTotal() {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });
  
    // Calculate discount based on percentage, capped at max discount
    let discount = (subtotal * discountPercentage) / 100;
    if (discount > maxDiscount) {
      discount = maxDiscount;
    }
    const total = subtotal - discount;
  
    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("discount").innerText = `-$${discount.toFixed(2)} (${discountPercentage}%, Max: $${maxDiscount})`;
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
  }
  
  // Function to apply coupon code
  document.getElementById("apply-coupon").addEventListener("click", () => {
    const couponCode = document.querySelector('.coupon input[type="text"]').value.toUpperCase();
    if (coupons[couponCode] !== undefined) {
      discountPercentage = coupons[couponCode].percentage;
      maxDiscount = coupons[couponCode].maxDiscount;
      alert(`Coupon applied! You've received a ${discountPercentage}% discount (up to $${maxDiscount} max).`);
    } else {
      alert("Invalid coupon code. Please try again.");
      discountPercentage = 0; // Reset discount if invalid
      maxDiscount = 0;
    }
    updateCartTotal(); // Recalculate totals after applying discount
  });
  
  // Initial render
  document.addEventListener('DOMContentLoaded', renderCart);
  
  // Example of adding a new product
  addProduct("Denim Jacket", "Black", "M", 45.99, 1, "https://via.placeholder.com/100");
  