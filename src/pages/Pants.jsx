import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../styles/category.css";

export default function Pants() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const pantProducts = products.filter(
    (product) => product.category === "pant"
  );

  return (
    <div className="category-page">
      <h1 className="category-title">褲子</h1>

      <div className="product-grid">
        {pantProducts.map((product) => (
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