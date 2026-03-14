import { IMAGES } from "@assets/images";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div className="footer-brand">
          <img src={IMAGES.logoMain} alt="CodeHeR LLC logo" />
          <p>Placeholder footer text.</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#hosting">Hosting</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>info@codeherllc.com</p>
          <p>Arizona Based | Remote USA</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;