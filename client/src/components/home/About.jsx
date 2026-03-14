import { IMAGES } from "@assets/images";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div className="about-image">
          <img src={IMAGES.founder} alt="Founder of CodeHeR LLC" />
        </div>

        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Placeholder About Section Heading</h2>
          <p>Placeholder company description.</p>
          <p>Additional placeholder paragraph.</p>
        </div>
      </div>
    </section>
  );
}

export default About;