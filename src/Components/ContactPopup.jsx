import React, { useState, useEffect } from "react";

const ACCESS_KEY = "8f238d73-4ed8-436a-8f16-44c8e09f7859";

const SERVICES = [
  "Brand Designing",
  "Social Media Marketing",
  "Performance Marketing",
  "Search Engine Optimisation (SEO)",
  "Website Development",
  "Graphic Designing",
  "App Development",
];

const popupStyles = `
  .cp-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    z-index: 9999;
    overflow-y: auto;
    animation: cpFade 0.25s ease;
  }
  .cp-modal {
    position: relative;
    width: 100%;
    max-width: 580px;
    max-height: 96vh;
    overflow-y: auto;
    padding: 20px 22px;
    animation: cpSlide 0.3s ease;
  }
  .cp-modal .cp-title {
    font-size: 22px;
    line-height: 1.25;
    margin: 0 0 12px;
    padding-right: 36px;
  }
  .cp-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.12);
    color: inherit;
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }
  .cp-close:hover {
    transform: rotate(90deg);
  }
  .cp-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 14px;
  }
  .cp-field {
    margin-bottom: 10px;
  }
  .cp-field.cp-full {
    grid-column: 1 / -1;
  }
  .cp-modal .cp-field > label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 4px;
  }
  .cp-modal .cp-field input,
  .cp-modal .cp-field select,
  .cp-modal .cp-field textarea {
    width: 100%;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
  }
  .cp-modal .cp-field input,
  .cp-modal .cp-field select {
    height: 40px;
  }
  .cp-modal .cp-field textarea {
    height: 78px;
    min-height: 78px;
    resize: none;
  }
  .cp-phone-wrap {
    position: relative;
  }
  .cp-modal .cp-phone-wrap input {
    padding-right: 42px;
  }
  .cp-flag {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 14px;
    pointer-events: none;
  }
  .cp-modal .alert {
    margin-bottom: 10px;
    padding: 8px 12px;
  }
  .cp-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  @keyframes cpFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes cpSlide {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 575px) {
    .cp-modal { padding: 16px 14px; }
    .cp-grid { grid-template-columns: 1fr; }
    .cp-modal .cp-title { font-size: 19px; }
  }
`;

const ContactPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  // Lock body scroll + close on Esc
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  const showError = (text) => {
    setErrorText(text);
    setErrorVisible(true);
    setSuccessVisible(false);
    setTimeout(() => setErrorVisible(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!validateEmail(email)) {
      showError("Oops! Please enter a valid email.");
      return;
    }

    setLoading(true);

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("from_name", "Cobizzer Website");
    formData.append("subject", "New Popup Enquiry from Cobizzer Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSuccessVisible(true);
        setErrorVisible(false);
        form.reset();
        setEmail("");
        setTimeout(() => {
          setSuccessVisible(false);
          onClose();
        }, 2500);
      } else {
        showError("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      showError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="cp-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <style>{popupStyles}</style>

      <div className="card cp-modal" role="dialog" aria-modal="true">
        <button
          type="button"
          className="cp-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h3 className="title-heading cp-title">Get a Free Consultation</h3>

        {successVisible && (
          <div className="alert success">
            <span className="check-icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-center">Thank you! Message sent successfully.</p>
          </div>
        )}

        {errorVisible && (
          <div className="alert error">
            <span className="cross-icon">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="text-center">{errorText}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">
          {/* Spam protection (hidden) */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="cp-grid">
            <div className="cp-field">
              <label htmlFor="cp-name">Name *</label>
              <input
                type="text"
                name="name"
                id="cp-name"
                placeholder="Name"
                required
              />
            </div>

            <div className="cp-field">
              <label htmlFor="cp-phone">Phone *</label>
              <div className="cp-phone-wrap">
                <input
                  type="tel"
                  name="phone"
                  id="cp-phone"
                  placeholder="Phone"
                  pattern="[0-9+\- ]{10,15}"
                  required
                />
                <svg
                  className="cp-flag"
                  viewBox="0 0 22 15"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="22" height="5" fill="#FF9933" />
                  <rect y="5" width="22" height="5" fill="#FFFFFF" />
                  <rect y="10" width="22" height="5" fill="#138808" />
                  <circle
                    cx="11"
                    cy="7.5"
                    r="1.8"
                    fill="none"
                    stroke="#000080"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>

            <div className="cp-field">
              <label htmlFor="cp-email">Email *</label>
              <input
                type="email"
                name="email"
                id="cp-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="cp-field">
              <label htmlFor="cp-service">Select a service</label>
              <select name="service" id="cp-service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="cp-field cp-full">
              <label htmlFor="cp-message">How we Can Help?</label>
              <textarea
                name="message"
                id="cp-message"
                placeholder="How we Can Help?"
              ></textarea>
            </div>
          </div>

          <div className="form-button-container">
            <button
              type="submit"
              className="btn btn-accent cp-submit"
              disabled={loading}
            >
              <span className="btn-title">
                <span>{loading ? "Sending..." : "Submit"}</span>
              </span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;