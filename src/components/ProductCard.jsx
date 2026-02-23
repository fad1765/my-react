import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="add-to-cart-btn">加入購物車</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">NT$ {product.price}</p>
      </div>
    </div>
  );
}