import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar({ onClose }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">商品分類</h1>
      <ul className="sidebar-list">
        <li className="sidebar-item" onClick={() => handleNavigate("/")}>首頁</li>
        <li className="sidebar-item" onClick={() => handleNavigate("/clothing")}>上衣</li>
        <li className="sidebar-item" onClick={() => handleNavigate("/pants")}>褲子</li>
        <li className="sidebar-item" onClick={() => handleNavigate("/socks")}>襪子</li>
      </ul>
    </aside>
  );
}