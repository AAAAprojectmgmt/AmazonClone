// Function to handle "Add to Cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const productId = e.target.closest(".product").getAttribute("data-id");
    addToLocalStorage(productId);
  });
});

// Add to LocalStorage
function addToLocalStorage(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display Cart Items
if (document.body.classList.contains("cart")) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  let total = 0;
  
  cartItems.forEach(productId => {
    // This would come from your backend or a static data.json file
    const product = { id: productId, name: `Product ${productId}`, price: 19.99 }; // Sample Product data
    
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name}</span>
      <span>$${product.price}</span>
    `;
    
    cartContainer.appendChild(productDiv);
    total += product.price;
  });

  document.getElementById("cart-total").innerHTML = `Total: $${total.toFixed(2)}`;
}

// Display Product Details
if (document.body.classList.contains("product-detail")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Example for showing product details (this data would be dynamic)
  const product = { id: productId, name: `Product ${productId}`, price: 19.99, description: "Lorem ipsum dolor sit amet." };
  
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = `$${product.price}`;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-img").src = `images/product${productId}.jpg`;

  document.getElementById("add-to-cart").addEventListener("click", () => {
    addToLocalStorage(productId);
  });
}
