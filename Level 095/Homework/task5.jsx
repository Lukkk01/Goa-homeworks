import { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setData(products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img
                src={product.image}
                alt={product.title}
                width="100"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
