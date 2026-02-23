import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../styles/category.css";

export default function Clothing() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const clothingProducts = products.filter(
    product => product.category === "clothing"
  );

  return (
    <div className="category-page">
      <h1 className="category-title">衣服</h1>

      <div className="product-grid">
        {clothingProducts.map(product => (
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