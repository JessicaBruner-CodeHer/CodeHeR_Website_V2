import { IMAGES } from "../../assets/images";

function Navbar() {
  return (
    <nav>
      <img src={IMAGES.logoMain} alt="CodeHeR LLC" width="120" />

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;