import { useEffect, useState } from "react";
import "../styles/Slider.css";

const images = [
  "/images/slides1.jpg",
  "/images/slides2.jpg",
  "/images/slides3.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`slide ${index === current ? "active" : ""}`}
          alt=""
        />
      ))}
    </div>
  );
}
