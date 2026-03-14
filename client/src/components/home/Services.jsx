function Services() {
  const services = [
    {
      title: "Full Website Build",
      description: "Placeholder description for full website development.",
      price: "Starting at $X,XXX"
    },
    {
      title: "Website Rebuild",
      description: "Placeholder description for redesign and rebuild work.",
      price: "Starting at $X,XXX"
    },
    {
      title: "Managed Hosting",
      description: "Placeholder hosting description.",
      price: "Starting at $XXX / month"
    },
    {
      title: "Technical Support",
      description: "Placeholder technical support description.",
      price: "$XXX / hour"
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Built to Support the Full Life of Your Website</h2>
          <p>Placeholder text for services intro.</p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <article className="flip-card" key={service.title}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{service.title}</h3>
                </div>

                <div className="flip-card-back">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="price-tag">{service.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;