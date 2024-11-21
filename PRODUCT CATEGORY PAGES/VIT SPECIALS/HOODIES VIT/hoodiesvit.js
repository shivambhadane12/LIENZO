let a = document.getElementById("product_container");

let id_of_each_product = ["A","E","C"];
let images=["555.jpeg","entc sweatshirt.jpg"];
let product_names=["productA","product2","product3"];
let product_prices=["999", "599","999"];
const addtocart_button = document.getElementById("addtocart_button");
let shopping_cart = document.getElementById("shopping_cart");
let s="";
let p=`<h3>YOUR ORDERS</h3>`;

for(let i = 0 ; i<1 ; i++){
    // let r = Math.floor(Math.random()*arr.length);
     s+=`        <div id="product">
          <div id="product_image"><img src="${images[i]}" height="100%"></div>
          <div id="price">
            <div id="new_price">₹999/-</div>
            <div id="old_price">MRP: <del> ₹14999/-</del></div>
          </div>
          <div id="product_buttons">
            <div id="buynow" class="product_button"><a href="/product summary/index.html" style="text-decoration: none; color:white;">BUY NOW</a></div>
            <div id="addtocart" class="product_button" onclick="addToCart(${images[i]},${product_names[i]},${product_prices[i]})">ADD TO CART</div>
          </div>
        </div>`
        console.log(i); 
}
a.innerHTML= s;




