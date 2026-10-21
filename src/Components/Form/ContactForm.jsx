// import React, { useState } from "react";

// const ContactForm = () => {
//   const [email, setEmail] = useState("");
//   const [successMessageVisible, setSuccessMessageVisible] = useState(false);
//   const [errorMessageVisible, setErrorMessageVisible] = useState(false);

//   const validateEmail = (email) => {
//     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return pattern.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessageVisible(true);
//       setSuccessMessageVisible(false);
//       setTimeout(() => setErrorMessageVisible(false), 3000);
//       return;
//     }

//     setSuccessMessageVisible(true);
//     setErrorMessageVisible(false);
//     e.target.reset();
//     setEmail(""); 
//     setTimeout(() => setSuccessMessageVisible(false), 3000);
//   };

//   return (
//     <div className="form-layout-wrapper">
//         <div className="card form-layout">
//             <h3 className="title-heading">Let's Talk About Your Next Project</h3>

//             {successMessageVisible && (
//             <div id="success-message" className="alert success">
//                 <span className="check-icon">
//                     <i className="fa-solid fa-check"></i>
//                 </span>
//                 <p className="text-center">Thank you! Message sent successfully.</p>
//             </div>
//             )}

//             {errorMessageVisible && (
//             <div id="error-message" className="alert error">
//                 <span className="cross-icon">
//                 <i className="fa-solid fa-xmark"></i>
//                 </span>
//                 <p className="text-center">Oops! Please enter a valid email.</p>
//             </div>
//             )}

//             <form
//             onSubmit={handleSubmit}
//             id="contactForm"
//             className="form needs-validation"
//             >
//                 <div className="row row-cols-md-2 row-cols-1 g-3">
//                     <div className="col">
//                         <input type="text" name="first-name" id="first-name" placeholder="First Name" />
//                     </div>
//                     <div className="col">
//                         <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
//                     </div>
//                 </div>

//                 <div className="row row-cols-md-2 row-cols-1 g-3">
//                         <div className="col">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="Email Address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="col">
//                             <input type="text" name="subject" id="subject" placeholder="Subject" />
//                         </div>
//                 </div>

//                 <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>

//                 <div className="form-button-container">
//                         <button type="submit" className="btn btn-accent">
//                             <span className="btn-title">
//                                 <span>Send a Message</span>
//                             </span>
//                             <span className="icon-circle">
//                                 <i className="fa-solid fa-arrow-right"></i>
//                             </span>
//                         </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   );
// };

// export default ContactForm;








import React, { useState } from "react";

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

const MAX_CHARS = 180;

const formStyles = `
  .form-field {
    margin-bottom: 18px;
  }
  .form-field > label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .services-checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .service-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
    margin: 0;
  }
  .service-checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    cursor: pointer;
  }
  .char-counter {
    text-align: right;
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 6px;
  }
  .form-button-container .btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorText, setErrorText] = useState("Oops! Please enter a valid email.");

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const showError = (text) => {
    setErrorText(text);
    setErrorMessageVisible(true);
    setSuccessMessageVisible(false);
    setTimeout(() => setErrorMessageVisible(false), 3000);
  };

  const handleServiceChange = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
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
    formData.append("subject", "New Enquiry from Cobizzer Website");
    formData.append(
      "services",
      services.length ? services.join(", ") : "Not selected"
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSuccessMessageVisible(true);
        setErrorMessageVisible(false);
        form.reset();
        setEmail("");
        setBrief("");
        setServices([]);
        setTimeout(() => setSuccessMessageVisible(false), 3000);
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
    <div className="form-layout-wrapper">
      <style>{formStyles}</style>

      <div className="card form-layout">
        <h3 className="title-heading">Tell Us More</h3>

        {successMessageVisible && (
          <div id="success-message" className="alert success">
            <span className="check-icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-center">Thank you! Message sent successfully.</p>
          </div>
        )}

        {errorMessageVisible && (
          <div id="error-message" className="alert error">
            <span className="cross-icon">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="text-center">{errorText}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          id="contactForm"
          className="form needs-validation"
        >
          {/* Spam protection (hidden) */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="form-field">
            <label htmlFor="full-name">Full name *</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              pattern="[0-9+\- ]{10,15}"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Your company / brand name"
            />
          </div>

          <div className="form-field">
            <label>Services Required</label>
            <div className="services-checkbox-group">
              {SERVICES.map((service) => (
                <label key={service} className="service-checkbox">
                  <input
                    type="checkbox"
                    checked={services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Brief About Your Requirement</label>
            <div className="char-counter">
              {brief.length} / {MAX_CHARS}
            </div>
            <textarea
              name="message"
              id="message"
              rows="5"
              maxLength={MAX_CHARS}
              placeholder="Tell us about your project and goals"
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
            ></textarea>
          </div>

          <div className="form-button-container">
            <button type="submit" className="btn btn-accent" disabled={loading}>
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

export default ContactForm;