// HOME BUTTON / EXPLORE GIFTS
function showMessage() {
    showPage("#products");
}


// SHOPPING CART
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    displayCart();
    alert(name + " added to cart!");
}


function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {
        total += item.price;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty 💜</p>";
    }

    totalElement.textContent = total;
}


function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}


function clearCart() {
    cart = [];
    displayCart();
}


// BUY NOW
function buyNow(name, price) {
    document.getElementById("productName").value = name;

    document.getElementById("quantity").value = 1;

    showPage("#customer-form");
}


// SLIDE NAVIGATION
function showPage(targetId) {
    const pages = [
        document.querySelector(".hero"),
        document.getElementById("products"),
        document.getElementById("customer-form"),
        document.getElementById("cart"),
        document.getElementById("contact")
    ];

    const targetPage = targetId === "#home"
        ? document.querySelector(".hero")
        : document.querySelector(targetId);

    if (!targetPage) return;

    pages.forEach(function(page) {
        if (page) {
            page.style.display = "none";
            page.classList.remove("slide-active");
        }
    });

    targetPage.style.display = "block";

    // Restart animation
    void targetPage.offsetWidth;

    targetPage.classList.add("slide-active");
}


// NAVIGATION MENU
document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId =
