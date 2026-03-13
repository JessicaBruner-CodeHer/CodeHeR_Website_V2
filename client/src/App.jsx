import { useState } from "react";
import { submitQuote } from "./services/quoteService";

function App() {
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
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "0 auto" }}>
      <h1>CodeHeR Website V2</h1>
      <p>Request a Quote</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Organization</label>
          <br />
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Project Type</label>
          <br />
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Message</label>
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.75rem 1.25rem" }}>
          Submit Quote
        </button>
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </main>
  );
}

export default App;