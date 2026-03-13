import { useState } from "react";
import { submitQuote } from "../../services/quoteService";

function QuoteForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitQuote(formData);
      alert("Quote submitted successfully.");
    } catch (error) {
      alert("Submission failed.");
    }
  };

  return (
    <section id="contact">
      <h2>Request a Quote</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="organization"
          placeholder="Organization"
          onChange={handleChange}
        />

        <input
          name="projectType"
          placeholder="Project Type"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Project Description"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </section>
  );
}

export default QuoteForm;