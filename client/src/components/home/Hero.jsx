import { IMAGES } from "@assets/images";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">

        <div className="hero-content">
          <p className="eyebrow">
            Arizona Based | Serving Clients Across the U.S.
          </p>

          <h1>
            Smart Websites. Powerful Infrastructure. Built for Growth.
          </h1>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed imperdiet augue at feugiat vulputate. Integer sed dignissim 
            elit. Nulla facilisi. Donec sed velit non nisl pretium tincidunt 
            ut nec massa.
          </p>

          <div className="hero-actions">
            <a href="#quote-form" className="btn btn-primary">
              Request a Quote
            </a>

            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={IMAGES.siteExample}
            alt="Example website built by CodeHeR"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;