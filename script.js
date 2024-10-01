// JavaScript to handle the checkout button click
document.getElementById("checkout-button").addEventListener("click", function() {
    const messageDiv = document.getElementById("message");
    messageDiv.style.display = "block"; // Show the message

    // Update the checkout button text to display cart items
    const cartItems = getCartItems(); // Function to get cart items 
    if (cartItems > 0) {
        this.textContent = "Checkout (" + cartItems + " items)";
    } else {
        this.textContent = "Checkout (Empty Cart)";
    }

    // Display "Not a real store" message
    messageDiv.textContent = "NOT A REAL STORE";
});

// Function to simulate adding items to the cart
function addToCart(button) {
    const product = button.parentElement; // Get the parent element (the product div)
    const productName = product.querySelector("h2").textContent; // Get the product name
    const sizeSelect = product.querySelector("#size-select"); // Find the size dropdown within the product
    const selectedSize = sizeSelect ? sizeSelect.value : "No Size"; // Get the selected size if it exists

    console.log("Adding " + productName + " (Size: " + selectedSize + ") to cart");

    // Update cart count in local storage
    let cartItems = getCartItems();
    cartItems++;
    localStorage.setItem("cartItems", cartItems); 

    // Update the checkout button's cart count
    updateCartCount();

    // Display "Thanks for adding..." message
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Thanks for adding " + productName + " to your cart!";
    messageDiv.style.display = "block"; 

    // Optionally hide the size selection after adding to cart
    if (sizeSelect) {
        sizeSelect.style.display = "none"; 
    }
}

// Function to update the cart count display
function updateCartCount() {
    const cartItems = getCartItems(); // Function to get cart items (we'll implement this later)
    const cartCountElement = document.getElementById("cart-count"); // Assuming you have an element to display cart count
    if (cartCountElement) {
        cartCountElement.textContent = "(" + cartItems + ")";
    }
}

// Function to get cart items (using local storage)
function getCartItems() {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? parseInt(cartItems) : 0; 
}

// ... (Your existing JavaScript code) ...

// Attach event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add, .one, .two, .three, .four, .five, .six, .seven");
addToCartButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        addToCart(this);
    });
});

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cartItems");
  updateCartCount(); // Update the checkout button's cart count
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "Cart is now empty!"; 
  messageDiv.style.display = "block"; 
}

// Attach event listener to the "Empty Cart" button
document.getElementById("empty-cart-button").addEventListener("click", clearCart);

// ... (Your existing JavaScript code) ...

// Example of how to display cart count in the checkout button (adjust as needed)
// Assuming you have a span with the id "cart-count" in your checkout button:
// <button id="checkout-button" class="checkout">Checkout <span id="cart-count"></span></button>
