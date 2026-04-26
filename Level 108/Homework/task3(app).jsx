import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Exotic from "./pages/Exotic";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />}>
        <Route index element={<ProductList />} />
        <Route path="exotic" element={<Exotic />} />
        <Route path=":id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
