import React, { useState, useMemo } from "react";

const Product = React.memo(({ product }) => {
  console.log("Rendering Product:", product.name);
  return (
    <div style={{ border: "1px solid #ccc", margin: "5px", padding: "5px" }}>
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
});

export default function ProductList() {
  const productsData = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics" },
    { id: 3, name: "Sofa", price: 500, category: "Furniture" },
    { id: 4, name: "T-Shirt", price: 20, category: "Clothing" },
    { id: 5, name: "Chair", price: 150, category: "Furniture" },
    { id: 6, name: "Headphones", price: 150, category: "Electronics" },
  ];

  const categories = ["All", "Electronics", "Furniture", "Clothing"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products for category:", selectedCategory);
    if (selectedCategory === "All") return productsData;
    return productsData.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <label>
        Select category:{" "}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <hr />

      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
