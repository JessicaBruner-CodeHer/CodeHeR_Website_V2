import { useState } from "react";
import { submitQuote } from "@services/quoteService";

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    message: ""
  });

  const [status, setStatus] = useState("");

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
    <section id="quote-form">
      <h2>Tell Us About Your Project</h2>
      <p>
        Complete the form below and we will follow up with next steps and a
        custom quote.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="organization">Business or Organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            <option value="New Website">New Website</option>
            <option value="Website Rebuild">Website Rebuild</option>
            <option value="Managed Hosting">Managed Hosting</option>
            <option value="Technical Support">Technical Support</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Request</button>
      </form>

      {status && <p>{status}</p>}
    </section>
  );
}

export default QuoteForm;