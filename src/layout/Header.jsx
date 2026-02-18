import "../styles/Header.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

export default function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <BsLayoutTextSidebar
        size={24}
        className="menu-icon"
        onClick={toggleSidebar}
      />
      {/* 左側：Logo / 名稱 */}
      <div className="header-left">
        <h1> Clothing Store</h1>
      </div>

      {/* 中間：可選搜尋 */}
      <div className="header-center">
        <input type="text" placeholder="搜尋商品" className="search-input" />
      </div>
      <ImSearch className="search-icons" />

      {/* 右側：購物車 */}
      <div className="header-right">
        <button className="cart-btn">
          購物車 <PiShoppingCartSimpleBold />
        </button>
      </div>
    </header>
  );
}
