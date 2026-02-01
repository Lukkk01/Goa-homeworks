// async - ასინქრონული ფუნქცია სადაც ვიყენებთ await-ს

async function getProducts() {
    // await აჩერებს კოდს სანამ ის პასუხს არ მიიღებს API-სგან
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    const container = document.getElementById('products-container');
    container.innerHTML = "";

    products.forEach(product => {
        container.innerHTML += `
        <div class="product">
            <h3>${product.title}</h3>
            <p>Category: ${product.category}</p>
            <img src="${product.image}" alt="${product.title}">
        </div>
        `;
    });
}

getProducts();