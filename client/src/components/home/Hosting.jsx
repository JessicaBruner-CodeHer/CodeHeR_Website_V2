import { IMAGES } from "@assets/images";

function Hosting() {
  return (
    <section id="hosting">
      <div>
        <h2>Lorem Ipsum Dolor Sit Amet</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div>
        <img src={IMAGES.services} alt="Infrastructure graphic" />
      </div>
    </section>
  );
}

export default Hosting;