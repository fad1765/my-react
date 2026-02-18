import Slider from "../components/Slider";
import { SlFire } from "react-icons/sl";
import "../styles/Home.css";
import ProductCarousel from "../components/ProductCarousel";
import { hotProducts, limitedProducts } from "../data/products";
import { MdOutlineTimer } from "react-icons/md";

export default function Home() {
  return (
    <div className="home">
      <Slider />

      {/* 熱門商品 */}
      <h1 className="home-title">
        熱門商品
        <SlFire className="fire-icon" />
      </h1>
      <ProductCarousel products={hotProducts} />

      {/* 限時商品 */}
      <h1 className="home-title-limited">
        限時商品 
        <MdOutlineTimer className="time-icon" />
      </h1>
      <ProductCarousel products={limitedProducts} />
    </div>
  );
}
