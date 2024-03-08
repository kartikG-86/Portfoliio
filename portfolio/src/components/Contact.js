import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Font.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activate loading spinner

    // Accessing form data
    const { name, email, message } = formData;

    try {
      const response = await axios.post(
        "https://portfoliio-backenddd.onrender.com/form",
        {
          name: name,
          email: email,
          message: message,
        }
      );
      console.log("Your response", response);
      setMsg(true); // Show success message
    } catch (err) {
      console.log("Data nhi gya");
    }

    setLoading(false); // Deactivate loading spinner

    // Log form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [msg]);

  // Check if form fields are empty
  const isFormEmpty =
    formData.name === "" || formData.email === "" || formData.message === "";

  return (
    <section id="contact" className="mt-5 mb-5">
      <div className="container">
        <div className="row text-start ps-5 fs-1">Contact</div>
        <hr
          className="pb-1 ms-3"
          style={{ width: "14rem", borderTop: "0.2rem solid #D2042D" }}
        />
        <div className="row text-start ps-5 pb-5 fs-6">
          Submit the form below to get in touch with me
        </div>
        {msg && (
          <div className="alert alert-success" role="alert">
            Message Sent Successfully 😄😄
          </div>
        )}
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit} className="col-lg-6 col-md-8 col-sm-10">
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                style={{ minHeight: "10rem" }}
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="floatingInput" className="form-label">
                Message
              </label>
            </div>
            <button
              className="btn btn-primary py-2"
              type="submit"
              disabled={isFormEmpty || loading} // Disable button if form is empty or loading
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
