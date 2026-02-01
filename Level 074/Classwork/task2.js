const products = [
    { id: 1, name: "ლეპტოპი", price: 2500 },
    { id: 2, name: "მობილური", price: 1800 },
    { id: 3, name: "ყურსასმენი", price: 150 },
    { id: 4, name: "მაუსი", price: 80 },
    { id: 5, name: "კლავიატურა", price: 120 },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

let cart = [];


function displayProducts() {
    products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <span>${product.name} - ${product.price} ₾</span>
        <button onclick="addToCart(${product.id})">დამატება</button>
    `;

productList.appendChild(div);
});
}


function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}


function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} ₾`;
    cartItems.appendChild(li);
    total += item.price;
    });

    totalEl.textContent = total;
}
displayProducts();