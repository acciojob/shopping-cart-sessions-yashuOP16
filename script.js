const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// ── Render Products ──
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} 
      <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// ── Render Cart ──
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// ── Add to Cart ──
function addToCart(id) {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === id);

  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

// ── Clear Cart ──
document.getElementById("clear-cart-btn").addEventListener("click", () => {
  sessionStorage.removeItem("cart");
  renderCart();
});

// ── On Page Load ──
renderProducts();
renderCart();