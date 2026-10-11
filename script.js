function showMessage() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    displayCart();
 alert(name +"added to cart!");
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

function buyNow(name, price) {
    document.getElementById("productName").value = name;

    document.getElementById("quantity").value = 1;

    document.getElementById("customer-form").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const customization = document.getElementById("customization").value;

    const message =
        "💜 TINY TREASURES - NEW ORDER 💜\n\n" +
        "Customer Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Address: " + address + "\n" +
        "Product: " + product + "\n" +
        "Quantity: " + quantity + "\n" +
        "Customization: " + (customization || "Not specified");

    const whatsappNumber = "919597071935";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
