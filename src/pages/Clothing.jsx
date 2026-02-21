import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/category.css";

export default function Clothing() {
  const clothingProducts = products.filter(
    product => product.category === "clothing"
  );

  return (
    <div className="category-page">
      <h1 className="category-title">衣服</h1>

      <div className="product-grid">
        {clothingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
