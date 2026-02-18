import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4 className="about-us">關於我們</h4>
          <p>高品質流行服飾品牌</p>
        </div>

        <div>
          <h4 className="customer-service">客服</h4>
          <p>Email: clothingstore@mail.com</p>
        </div>

        <div>
          <h4>社群</h4>
          <p className="social-item">
            Instagram
          <FaInstagram className="ig-icon" />
          </p>
          <p className="social-item">
            Facebook
          <FaFacebook  className="fb-icon"/>
          </p>
          <p className="social-item">
            Line
          <FaLine   className="line-icon"/>
          </p>
        </div>
      </div>

      <div className="footer-bottom">© 2026 YourBrand</div>
    </footer>
  );
}
