import { useState } from "react";
import { submitQuote } from "@services/quoteService";

function QuoteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Submitting...");

    try {
      const result = await submitQuote(formData);

      if (result.success) {
        setStatus("Quote submitted successfully.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          projectType: "",
          message: ""
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Submission failed.");
    }
  };

  return (
    <section id="quote-form" className="quote-section">
      <h2>Lorem Ipsum Project Request</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button className="quote-open-button" onClick={() => setIsOpen(true)}>
        Open Quote Form
      </button>

      {isOpen && (
        <div className="quote-modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="quote-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="quote-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close quote form"
            >
              ×
            </button>

            <h3>Request a Quote</h3>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                name="organization"
                type="text"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type</option>
                <option value="New Website">New Website</option>
                <option value="Website Rebuild">Website Rebuild</option>
                <option value="Managed Hosting">Managed Hosting</option>
                <option value="Technical Support">Technical Support</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Project details"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>

            {status && <p>{status}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

export default QuoteForm;