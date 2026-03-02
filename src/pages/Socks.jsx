import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../styles/category.css";

export default function Socks() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sockProducts = products.filter(
    (product) => product.category === "sock"
  );

  return (
    <div className="category-page">
      <h1 className="category-title">襪子</h1>

      <div className="product-grid">
        {sockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}