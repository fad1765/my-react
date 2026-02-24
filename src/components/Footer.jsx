import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4 className="footer-heading">關於我們</h4>
          <p>高品質流行服飾品牌</p>
        </div>

        <div>
          <h4 className="footer-heading">客服</h4>
          <p>Email: clothingstore@mail.com</p>
        </div>

        <div>
          <h4 className="footer-heading">社群</h4>
          <div className="social-row">
            <FaInstagram className="ig-icon" />
            <FaFacebook className="fb-icon" />
            <FaLine className="line-icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 YourBrand</div>
    </footer>
  );
}