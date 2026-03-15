import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];

  return (
    <div>
      <h1>პროდუქტები</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
