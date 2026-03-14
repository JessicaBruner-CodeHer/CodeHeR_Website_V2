import { IMAGES } from "@assets/images";

function Hero() {
  return (
    <section id="hero">
      <div>
        <h1>Lorem Ipsum Website Development</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="hero-buttons">
          <a href="#quote-form" className="hero-primary">
            Request Quote
          </a>

          <a href="#services" className="hero-secondary">
            View Services
          </a>
        </div>
      </div>

      <div>
        <img src={IMAGES.sitePreview} alt="Website preview" />
      </div>
    </section>
  );
}

export default Hero;