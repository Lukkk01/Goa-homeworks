const productPrices = new Map([
    ['Laptop', 1000],
    ['Phone', 500],
    ['Tablet', 300],
])

for (const [product, price] of productPrices) {
    console.log(`${product}: $${price}`);
}

console.log(productPrices.set('Phone', productPrices.get('Phone') * 1.2));