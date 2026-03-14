import { IMAGES } from "@assets/images";

function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-brand">
        <img src={IMAGES.logoMain} alt="CodeHeR LLC" />
      </a>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#quote-form">Quote</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;