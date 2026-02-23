import { useEffect } from "react";
import "../styles/LogoutSuccessModal.css";

export default function LogoutSuccessModal({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1500); // 1.5秒後自動關閉
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="success-overlay">
      <div className="success-modal">
        <div className="success-check">✓</div>
        <p>已成功登出</p>
      </div>
    </div>
  );
}