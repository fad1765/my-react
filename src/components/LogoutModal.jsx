import "../styles/logout.css";

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="logout-overlay" onClick={onCancel}>
      <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
        <h2>確認登出</h2>
        <p>您確定要登出帳號嗎？</p>
        <div className="logout-btns">
          <button className="logout-cancel-btn" onClick={onCancel}>取消</button>
          <button className="logout-confirm-btn" onClick={onConfirm}>確認登出</button>
        </div>
      </div>
    </div>
  );
}