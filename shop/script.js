let cart = [];
let currency = "USD";

// Update currency and refresh cart
document.getElementById("currency").addEventListener("change", (e) => {
  currency = e.target.value;
  updateCart();
});

function addToCart(name, amountId) {
  const amount = parseInt(document.getElementById(amountId).value);
  if (amount < 1 || amount > 100) {
    alert("Please enter an amount between 1 and 100.");
    return;
  }

  cart.push({ name, amount });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${currency === "USD" ? "$" : "£"}${item.amount}`;
    cartItems.appendChild(li);
    total += item.amount;
  });

  document.getElementById("total").textContent = `${currency === "USD" ? "$" : "£"}${total}`;
}

function checkout() {
  alert("Checkout functionality will be implemented later with a payment gateway.");
  cart = [];
  updateCart();
}