import { IMAGES } from "@assets/images";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#hero" className="brand" aria-label="CodeHeR LLC Home">
          <img src={IMAGES.logoMain} alt="CodeHeR LLC logo" />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
         
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#quote-form" className="btn btn-primary nav-cta">
          Request a Quote
        </a>

        <button className="menu-toggle" aria-label="Open menu" aria-expanded="false" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;