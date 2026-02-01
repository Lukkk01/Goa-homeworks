async function getProducts() {
    try {
        // 1) ველოდებით API-ის პასუხს
        const response = await fetch("https://fakestoreapi.com/products");
        
        // 2) ველოდებით JSON-ში გადაყვანას
        const products = await response.json();

        // 3) ვიღებთ კონტეინერს
        const container = document.getElementById("products");
        container.innerHTML = "";

        // 4) თითოეული პროდუქტის რენდერი
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <h3>${product.title}</h3>
                <p>Category: ${product.category}</p>
                <img src="${product.image}" alt="${product.title}" width="150">
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

getProducts();
