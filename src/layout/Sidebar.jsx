import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar" onClick={(e) => e.stopPropagation()}>
      <h1 className="sidebar-title">商品分類</h1>

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/">首頁</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/clothing">上衣</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/pants">褲子</Link>
        </li >
        <li className="sidebar-item">
          <Link to="/socks">襪子</Link>
        </li>
      </ul>
    </aside>
  );
}
