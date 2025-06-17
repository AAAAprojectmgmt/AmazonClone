// Add to Cart functionality (just a simple console log for now)
const addToCartButtons = document.querySelectorAll(".product button");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Item added to the cart!");
  });
});
