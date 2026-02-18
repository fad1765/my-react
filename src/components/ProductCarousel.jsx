import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductCarousel.css";

export default function ProductCarousel({ products }) {
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const windowRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!windowRef.current || !trackRef.current) return;

    const firstItem = trackRef.current.children[0];
    if (!firstItem) return;

    const itemRealWidth = firstItem.offsetWidth + 20;
    setItemWidth(itemRealWidth);

    const visibleWidth = windowRef.current.offsetWidth;
    const totalWidth = products.length * itemRealWidth;

    setMaxTranslate(Math.max(0, totalWidth - visibleWidth));
  }, [products]);

  const next = () => setIndex(prev => prev + 1);
  const prev = () => setIndex(prev => Math.max(prev - 1, 0));

  const translateX = Math.min(index * itemWidth, maxTranslate);

  return (
    <div className="carousel">
      <button onClick={prev} disabled={index === 0} className="arrow left">
        ‹
      </button>

      <div className="carousel-window" ref={windowRef}>
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.4s ease"
          }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <button
        onClick={next}
        disabled={translateX >= maxTranslate}
        className="arrow right"
      >
        ›
      </button>
    </div>
  );
}
