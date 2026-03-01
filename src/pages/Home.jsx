import { useState } from "react";
import Slider from "../components/Slider";
import { SlFire } from "react-icons/sl";
import "../styles/Home.css";
import ProductCarousel from "../components/ProductCarousel";
import ProductModal from "../components/ProductModal";
import { hotProducts, limitedProducts } from "../data/products";
import { MdOutlineTimer } from "react-icons/md";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="home">
      <Slider />

      <h1 className="home-title">
        熱門商品
        <SlFire className="fire-icon" />
      </h1>
      <ProductCarousel
        products={hotProducts}
        onProductClick={setSelectedProduct}
      />

      <h1 className="home-title-limited">
        限時商品
        <MdOutlineTimer className="time-icon" />
      </h1>
      <ProductCarousel
        products={limitedProducts}
        onProductClick={setSelectedProduct}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
