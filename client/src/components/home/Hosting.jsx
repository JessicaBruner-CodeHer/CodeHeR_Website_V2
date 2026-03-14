import { IMAGES } from "@assets/images";

function Hosting() {
  return (
    <section id="hosting" className="hosting section">
      <div className="container hosting-grid">
        <div className="hosting-copy">
          <p className="eyebrow">Managed Hosting</p>
          <h2>Placeholder Hosting Section Heading</h2>
          <p>Placeholder hosting messaging.</p>

          <div className="hosting-points">
            <div className="hosting-point">
              <h3>Secure Hosting</h3>
              <p>Placeholder text.</p>
            </div>

            <div className="hosting-point">
              <h3>Monitoring</h3>
              <p>Placeholder text.</p>
            </div>

            <div className="hosting-point">
              <h3>Support</h3>
              <p>Placeholder text.</p>
            </div>
          </div>
        </div>

        <div className="hosting-visual">
          <img src={IMAGES.services} alt="Web infrastructure graphic" />
        </div>
      </div>
    </section>
  );
}

export default Hosting;