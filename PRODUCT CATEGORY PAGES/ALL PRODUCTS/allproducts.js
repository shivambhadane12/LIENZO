let a = document.getElementById("product_container");
let page1 = document.getElementById("page1");
let main = document.getElementById("main");
let id_of_each_product = ["A","E","C"];
let images=[];
let product_title=[];
let short_description=[];
let Design=[];
let product_Category = [];
let product_Fabric = [];
for(let j=1; j<=49; j++){
  images.push(`${j}.png`);
}
let product_names=["productA","product2","product3"];
let product_prices=["999", "599","999"];
let MRP = ["1499"];
let discount_percentage=[];
for(n =0; n<images.length; n++){
  const discount = Math.round((product_prices[n]/MRP[n])*100);
discount_percentage.push(discount);
}
const addtocart_button = document.getElementById("addtocart_button");
let shopping_cart = document.getElementById("shopping_cart");
let s="";
let p=`<h3>YOUR ORDERS</h3>`;
var i;
for(i = 0 ; i<images.length; i++){
    // let r = Math.floor(Math.random()*arr.length);
     s+=`        <div id="product">
          <div id="product_image"><img src="${images[i]}" height="100%"></div>
          <div id="price">
            <div id="new_price">₹${product_prices[i]}/-</div>
            <div id="old_price">MRP: <del> ₹${MRP[i]}/-</del></div>
          </div>
          <div id="product_buttons">
            <div id="buynow" class="product_button" onclick="showdetails(${i})">BUY NOW</div>
            <div id="addtocart" class="product_button" onclick="addToCart(${i}, '${product_names[i]}', ${product_prices[i]},'${images[i]}')">ADD TO CART</div>
          </div>
        </div>`
}
a.innerHTML= s;

function showdetails(m){
  for(l=0; l<images.length; l++){
    if(m==l){
      page1.style.display="none";
      main.innerHTML = `    <div id="header">
      <div id="logo"><a href="/LIENZO/HOME PAGE/index.html" style="height: 100%;"><img src="lienzologo.jpeg" style="height: 100%;" ></a></div>
      <div id="name">LIENZO</div>
      <div id="tabs">
        <!-- <a href="/HOME PAGE/index.html" style="text-decoration: none;"><div class="tab_items">HOME</div></a> -->
        <a href="/LIENZO/PRODUCT CATEGORY PAGES/ALL PRODUCTS/cartpage2.html" style="text-decoration: none;"><div class="tab_items">CART</div></a>
        <a href="/LIENZO/SIGNUP AND LOGIN PAGE/singup.html" style="text-decoration: none;"><div class="tab_items">LOGIN</div></a>
      </div>
      <div id="tabs_icon">
        <!-- <a href="/HOME PAGE/index.html" style="text-decoration: none;"><div class="tab_items_icon"><img src="home.png" height="100%"></div></a> -->
        <a href="/LIENZO/PRODUCT CATEGORY PAGES/ALL PRODUCTS/cartpage2.html" style="text-decoration: none;"><div class="tab_items_icon"><img src="grocery-store.png" height="100%"></div></a>
        <a href="/LIENZO/SIGNUP AND LOGIN PAGE/singup.html" style="text-decoration: none;"><div class="tab_items_icon"><img src="user.png" height="100%"></div></a>
      </div>
    </div>
<div class="fake-header"><h1>DON'T STRETCH</h1></div>
    

    <main id="product_main">

        <div class="product-container">
        <div class="product-images">
            <div class="slideshow-container">
                <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
        <img src="${images[m]}" alt="Product Image 1" class="slide-image active" style="padding: 10px;">
        <img src="${images[m]}" alt="Product Image 2" class="slide-image" style="padding: 10px;">
        <img src="${images[m]}" alt="Product Image 3" class="slide-image" style="padding: 10px;">
        <img src="${images[m]}" alt="Product Image 4" class="slide-image" height="100%" style="padding: 10px;">
        <button class="next" onclick="changeSlide(1)">&#10095;</button>
                
            </div>
            <div class="thumbnail-container">
                <img src="${images[m]}" class="thumbnail" onclick="selectSlide(0)">
                <img src="${images[m]}" class="thumbnail" onclick="selectSlide(1)">
                <img src="${images[m]}" class="thumbnail" onclick="selectSlide(2)">
                <img src="${images[m]}" class="thumbnail" onclick="selectSlide(3)">
            </div>
        </div>

            <div class="product-details" >
                <h1>${product_title[m]}</h1>
                <p class="description" style="font-size: 20px">${short_description[m]}</p>
                <p class="price">
                    <span class="discounted-price">₹    ${product_prices[m]}/-</span>
                    <span class="original-price">₹${MRP[m]}</span>
                    <span class="discount">${discount_percentage[m]}% OFF</span>
                </p>
                <div class="size-selection">
    <p>Select Size</p>
    <button id="sizes" class="size-button" onclick="selectSize('S')">S</button>
    <button id="sizem" class="size-button" onclick="selectSize('M')">M</button>
    <button id="sizel" class="size-button" onclick="selectSize('L')">L</button>
        <button id="sizexl" class="size-button" onclick="selectSize('XL')">XL</button>
    <button id="size2xl" class="size-button" onclick="selectSize('2XL')">2XL</button>
    <p>Your selected size: <span id="selected-size">None</span></p>
                </div>
                <button class="add-to-bag" onclick=" addToCart(${i},'${product_title[m]}',${product_prices[m]}, '${images[m]}')">ADD TO CART</button>
                <button class="add-to-bag" class="wishlist" id="buyit" onclick="show_cart(${product_prices[m]},'${images[m]}','${product_title[m]}');" >BUY NOW</button>
                <div class="delivery">
                    <p>Check for Delivery Details</p>
                    <input id="pincode" type="text" placeholder="Enter Pincode">
                    <button onclick="checkpincode()">CHECK</button>
                    <h6 id="pincode_validity"></h6>
                </div>
                <div class="highlights">
                    <h2>Key Highlights</h2>
                    <p><strong>Design:</strong> ${Design[m]}</p>
                    <p><strong>Category:</strong> ${product_Category[m]}</p>
                    <p><strong>Fabric:</strong> ${product_Fabric[m]}</p>
                </div>
            </div>
        </div>
    </div>
    </main>

    <script>
        // Select all elements with the class 'size-button'
        const sizeButtons = document.querySelectorAll(".size-button");
    
        // Function to clear all buttons' styles
        function clearSelection() {
            sizeButtons.forEach(button => {
                button.style.backgroundColor = "";
                button.style.color = "";
            });
        }
    
        // Add click event listener to each button
        sizeButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Clear styles from all buttons
                clearSelection();
                
                // Highlight the selected button
                button.style.backgroundColor = "black";
                button.style.color = "white";
            });
        });
    </script>
    <script src="script.js"></script>`  
    }
      
  }

}


function checkpincode(){
  const pincode = document.getElementById("pincode");
  const pincode_validity = document.getElementById("pincode_validity");

  console.log(pincode.value);
  if(pincode.value == 411046){ 
    pincode_validity.style.color="green";
    pincode_validity.innerText= `BUY IT AND GET IT`;
  }
  else{
    pincode_validity.style.color="red";
    pincode_validity.innerText= `SORRY CURRENTLY WE CAN,T DELIVER THEIR`;
  }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        thumbnails[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            thumbnails[i].classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide-image');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
    }

    showSlide(currentSlide);
}

function selectSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}


// Initialize the first slide
showSlide(currentSlide);

// Function to handle the size selection
let selected_Size = null;
function selectSize(size) {
  selected_Size = size;
  // Update the displayed selected size
  const selectedSizeElement = document.getElementById("selected-size");
  selectedSizeElement.innerText = size;

  // Change the style of the selected size button to indicate it's selected
  const sizeButtons = document.querySelectorAll(".size-button");
  sizeButtons.forEach(button => {
      button.style.backgroundColor = ""; // Reset all button styles
      button.style.color = ""; // Reset all button styles
  });

  // Highlight the selected button
  const selectedButton = Array.from(sizeButtons).find(button => button.innerText === size);
  if (selectedButton) {
      selectedButton.style.backgroundColor = "black"; // Dark background for the selected button
      selectedButton.style.color = "white"; // White text for the selected button
  }
  console.log(selected_Size);
}



// Global variable to store cart items
let cart = [];

// Function to add a product to the cart
function addToCart_buynow(name, price, quantity, image,size) {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.name === name);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase the quantity
        cart[existingProductIndex].quantity += quantity;
    } else {
        // If the product is not in the cart, add it
        const product = {
            name: name,
            price: price,
            quantity: quantity,
            image: image,
            size: size
        };
        cart.push(product);
    }

    // Update the cart UI
    updateCartUI();
}

// Function to remove a product from the cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartUI();
}

// Function to change the quantity of a product in the cart
function changeQuantity(name, newQuantity) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity = newQuantity;
        updateCartUI();
    }
}

// Function to update the cart UI
function updateCartUI() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";  // Clear current cart content

    let totalPrice = 0;

    // Create HTML for each cart item
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price} each</p>
                <p>₹${size} each</p>
            </div>
            <div class="item-actions">
                <div style="height:50px; width:50px; display:flex; align-items:center; justify-content:center;">QTY:</div><input type="number" value="${item.quantity}" min="1" onchange="changeQuantity('${item.name}', this.value)">
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Update total price
    // document.getElementById("total-price").textContent = totalPrice;
    // createQR(totalPrice);
    // const done = document.getElementById("done");
    // done.addEventListener("click",()=>{
    //     makepayment(totalPrice);
    // })
    
}
function makepayment(amt) {
    console.log(amt);
    window.location.href = `upi://pay?pa=9637181890@ibl%26am=${amt}%26tn=PAYMENT FOR LIENZO`;
}




// function placeorder(){
//     main.innerHTML=`<div id="main">
//     <div id="payment_container">
//         <div id="logo"><img src="/lienzologo.jpeg" alt="Company Logo"></div>
//         <div id="middle_container">
//             <h2>Scan to Pay</h2>
//             <div id="QR_CODE"><img src="" alt="QR Code"></div>
//             <div id="regenerateQR" onclick="createQR(100)">Regenerate QR <img src="refresh.png" alt="Refresh Icon"></div>
//             <div id="warning"></div>
//             <div id="done" onclick="makepayment(100)">Pay with UPI App</div>
//         </div>
//     </div>
// </div>`;
// }

function createQR(amt) {
    const QR_CODE = document.getElementById("QR_CODE");
    const link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=9637181890@ibl%26am=${amt}%26tn=PAYMENT FOR LIENZO`;
    QR_CODE.innerHTML = `<img src="${link}" alt="Payment QR Code">`;
}



function show_cart(amt,img,title){
    let product_main = document.getElementById("product_main");
    product_main.innerHTML=`<main id="main_duplicate">
  <div id="cart-container">
    <!-- Cart Items Will Appear Here -->
    <div class="cart-item">
      <img src="${img}" height="100px" alt="Product Image">
      <p>${title}</p>
      <p>Price per item: ₹<span id="price-per-item">${amt}</span></p>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" value="1" min="1" onchange="updateTotalPrice();" style="width: 50px;">
    </div>
  </div>
  <!-- Cart Total -->
  <div id="cart-total">
    <p>Total: ₹<span id="total-price">${amt}</span></p>
  </div>
  <div class="section_A">
    <form id="myform" onsubmit="return validateForm();">
      <h2 style="color:black">Shipping Address</h2>
      <input type="text" id="size" placeholder="Enter Size" style="background-color:white; color:black;" required>
      <input type="text" id="fullName" placeholder="Full Name" style="background-color:white; color:black;" required>
      <input type="text" id="address" placeholder="Address Line 1" style="background-color:white; color:black;" required>
      <input type="text" id="campus" placeholder="SELECT YOUR CAMPUS (only for VIT students)" style="background-color:white; color:black;">
      <input type="text" id="city" placeholder="City" style="background-color:white; color:black;" required>
      <input type="text" id="postalCode" placeholder="Postal Code" style="background-color:white; color:black;" required>
      <input type="text" id="mobileNumber" placeholder="Mobile Number" style="background-color:white; color:black;" required>
      <center>
        <input type="submit" value="Place Order" class="place-order" style="font-size:25px; padding-left:20%; padding-right:20%;">
      </center>
    </form>
  </div>
</main>
  <div id="main" style=" align-items:center; justify-content:center; display:none" class="QR_to_PAY">
    <div id="payment_container" style="margin-top:10px">
      <div id="middle_container" style="background-color:white">
        <h2 style="color:black">Scan to Pay</h2>
        <div id="QR_CODE"><img src="" alt="QR Code"></div>
        <div id="warning"></div>
        <div id="done">Pay with UPI App</div>
      </div>
    </div>
  </div>`;
createQR(amt);
  }

  function validateForm() {
    // Retrieve form inputs
    const size = document.getElementById("size").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();
    const mobileNumber = document.getElementById("mobileNumber").value.trim();

    // Check if all required fields are filled
    if (!size || !fullName || !address || !city || !postalCode || !mobileNumber) {
      alert("Please fill in all required fields.");
      return false; // Prevent form submission
    }

    // Call showpaymentmethod() if validation is successful
    showpaymentmethod();
    return false; // Prevent default form submission
  }



  function updateTotalPrice() {
    const pricePerItem = parseFloat(document.getElementById("price-per-item").innerText);
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPriceElement = document.getElementById("total-price");

    if (!isNaN(pricePerItem) && !isNaN(quantity) && quantity > 0) {
      const totalPrice = pricePerItem * quantity;
      totalPriceElement.innerText = totalPrice.toFixed(2); // Update total price with two decimal points
      let total_bill=totalPriceElement.innerText;
      createQR(total_bill);
      console.log(total_bill);
    } else {
      totalPriceElement.innerText = "0.00";
    }
  }
  function showpaymentmethod() {
    let section_A = document.querySelector(".section_A");
    section_A.style.display="none";
    // Display payment section
    const paymentContainer = document.querySelector(".QR_to_PAY");
    paymentContainer.style.display = "flex";
  }




  function addToCart(id, name, price, image, size) {
    // Retrieve the existing cart from localStorage or create a new one
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the product already exists in the cart with the same size
    const existingProduct = cart.find(
      product => product.id === id && product.size === size
    );
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if already in the cart
    } else {
      // Add new product to the cart
      cart.push({ id, name, price, image, size, quantity: 1 });
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert(`${name} (${size}) added to cart!`);
  }

  function removeFromCart(id, size) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id || item.size !== size); // Remove the selected product
  
    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Re-render the cart
  }
  
  function validateRequiredFields(formId) {
    const form = document.getElementById(formId);
    const requiredInputs = form.querySelectorAll("input[required], select[required]");
    let allFilled = true;
  
    requiredInputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false; // If any required input is empty, mark as not filled
      }
    });
  
    if (allFilled) {

    } else {
      alert("Please fill in all required fields.");
    }
  }
  