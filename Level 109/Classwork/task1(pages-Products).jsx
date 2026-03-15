import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>პროდუქტის დეტალები</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;
