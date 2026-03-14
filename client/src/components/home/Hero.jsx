function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <p className="eyebrow">Arizona Based | Serving Clients Across the U.S.</p>

        <h1>Smart Websites. Powerful Infrastructure. Built for Growth.</h1>

        <p className="hero-text">
          Placeholder hero messaging. Later this section will highlight trust, reliability,
          transparency, and managed hosting support for SMBs and nonprofit organizations.
        </p>

        <div className="hero-actions">
          <a href="#quote-form" className="btn btn-primary">Request a Quote</a>
          <a href="#services" className="btn btn-secondary">Explore Services</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;