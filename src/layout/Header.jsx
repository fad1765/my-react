import "../styles/Header.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useCart } from "../context/useCart";

export default function Header({ toggleSidebar }) {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <BsLayoutTextSidebar
        size={24}
        className="menu-icon"
        onClick={toggleSidebar}
      />
      <div className="header-left">
        <h1>Clothing Store</h1>
      </div>

      <div className="header-center">
        <input type="text" placeholder="搜尋商品" className="search-input" />
      </div>
      <ImSearch className="search-icons" />

      <div className="header-right">
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          購物車 <PiShoppingCartSimpleBold />
          {totalCount > 0 && (
            <span className="cart-count">{totalCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}