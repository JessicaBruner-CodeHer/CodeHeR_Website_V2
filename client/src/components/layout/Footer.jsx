import { IMAGES } from "@assets/images";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src={IMAGES.logoMain} alt="CodeHeR LLC" className="footer-logo" />

        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="footer-meta">info@codeherllc.com</p>
        <p className="footer-meta">Arizona Based | Serving Clients Across the U.S.</p>
        <p className="footer-copy">© {new Date().getFullYear()} CodeHeR LLC</p>
      </div>
    </footer>
  );
}

export default Footer;