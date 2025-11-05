const products = [
  { name: "ვაშლი", description: "///////.", price: 2 },
  { name: "ბანანი", description: "////////.", price: 3 },
  { name: "ნარინჯი", description: "/////////.", price: 4 },
  { name: "ატამი", description: "////////.", price: 5 }
];
///////////////////////////////////////////////////////////////////////
const container = document.getElementById("productsContainer");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  container.innerHTML += `
    <div class="product">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>ფასი: ${product.price} ₾</p>
      <button>Buy</button>
    </div>
    <hr>
  `;
}
