import '../styles/Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar" onClick={(e) => e.stopPropagation()}>
      <h1 className="sidebar-title">商品分類</h1>

      <ul className="sidebar-list">
        <li>上衣</li>
        <li>褲子</li>
        <li>襪子</li>
      </ul>
    </aside>
  );
}
