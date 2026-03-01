import { useState } from "react";
import "../styles/Header.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../components/LogoutModal";
import LogoutSuccessModal from "../components/LogoutSuccessModal";

export default function Header({ toggleSidebar }) {
  const { totalCount, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
    setShowSuccess(true);
  };

  const handleSuccessDone = () => {
    setShowSuccess(false);
    navigate("/");
  };

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
        {user ? (
          <>
            <span className="header-username">👤 {user.name}</span>
            <button
              className="logout-btn"
              onClick={() => setShowLogoutModal(true)}
            >
              登出
            </button>
          </>
        ) : (
          <button className="login-link-btn" onClick={() => navigate("/login")}>
            登入
          </button>
        )}

        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          購物車 <PiShoppingCartSimpleBold />
          {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </button>
      </div>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}

      {showSuccess && <LogoutSuccessModal onDone={handleSuccessDone} />}
    </header>
  );
}
