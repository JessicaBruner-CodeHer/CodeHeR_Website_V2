import { IMAGES } from "@assets/images";

function About() {
  return (
    <section id="about">
      <div>
        <img src={IMAGES.founder} alt="Founder" />
      </div>

      <div>
        <h2>Lorem Ipsum Dolor Sit Amet</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
    </section>
  );
}

export default About;