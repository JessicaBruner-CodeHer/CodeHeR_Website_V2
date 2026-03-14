import { useState } from "react";
import { submitQuote } from "@services/quoteService";

function QuoteForm() {
  const [status, setStatus] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

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
    setStatus("");

    try {
      const result = await submitQuote(formData);

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          organization: "",
          projectType: "",
          message: ""
        });
        setShowThankYou(true);
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Submission failed.");
    }
  };

  return (
    <section id="quote-form" className="quote-form-anchor">
      <div className="quote-modal is-open" id="quoteModal" aria-hidden="false">
        <div className="quote-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">
          {!showThankYou ? (
            <div className="modal-view is-active" id="quoteFormView">
              <div className="quote-modal-header">
                <p className="eyebrow">Request a Quote</p>
                <h2 id="quoteModalTitle">Tell Us About Your Project</h2>
                <p>
                  Complete the form below and we will follow up with next steps and a custom quote.
                </p>
              </div>

              <form className="quote-form" id="quoteForm" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="quoteName">Name</label>
                  <input
                    id="quoteName"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quoteEmail">Email</label>
                  <input
                    id="quoteEmail"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quoteOrg">Business or Organization</label>
                  <input
                    id="quoteOrg"
                    name="organization"
                    type="text"
                    placeholder="Company or nonprofit name"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quoteType">Project Type</label>
                  <select
                    id="quoteType"
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

                <div className="form-group form-group-full">
                  <label htmlFor="quoteMessage">Project Details</label>
                  <textarea
                    id="quoteMessage"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {status && <div className="form-message">{status}</div>}

                <div className="quote-form-actions">
                  <button type="submit" className="btn btn-primary">Send Request</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="modal-view thank-you-view is-active" id="quoteThankYouView">
              <div className="quote-modal-header thank-you-header">
                <p className="eyebrow">Thank You</p>
                <h2>Your Request Has Been Submitted</h2>
                <p>
                  We received your message and will review your project details shortly.
                </p>
              </div>

              <div className="thank-you-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowThankYou(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;