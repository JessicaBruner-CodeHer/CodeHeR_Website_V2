function ContactCTA() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-cta-wrap">
        <div className="contact-cta-card">
          <p className="eyebrow">Contact</p>
          <h2>Start Your Project</h2>
          <p>
            Tell us what you need and we will follow up with next steps and a custom quote.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> info@codeherllc.com</p>
            <p><strong>Location:</strong> Arizona Based | Serving Clients Across the U.S.</p>
          </div>

          <div className="contact-actions">
            <a href="#quote-form" className="btn btn-primary">Open Quote Form</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;