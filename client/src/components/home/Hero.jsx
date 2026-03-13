import { IMAGES } from "../../assets/images";

function Hero() {
  return (
    <section>
      <img src={IMAGES.services} alt="CodeHeR Services" width="600" />

      <h1>CodeHeR LLC</h1>
      <p>Custom web development and digital solutions.</p>

      <a href="#contact">Request a Quote</a>
    </section>
  );
}

export default Hero;