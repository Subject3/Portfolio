import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    if (!form.user_name) return "Name is required";
    if (!form.user_email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.user_email)) return "Email is invalid";
    if (!form.message) return "Message is required";
    return null;
  };

  // SEND EMAIL
  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setStatus("Sending...");
    // Username is subject.ken3@gmail.com
    emailjs
      .send(
        "service_niyo3jh",  //  Service Key
        "template_8txz00n", // Template Key
        form,
        "7bTW-LEM42C749iYK" // Public Key
      )
      .then(() => {
        setStatus("Message sent successfully ✅");
        setForm({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Something went wrong ❌");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects.
          </p>

          <div className="contact-info">
            <div><HiOutlineMail /> kenlieu@berkeley.edu </div>
            <div><HiOutlinePhone /> +1 (669) 208-8778</div>
            <div><HiOutlineLocationMarker /> San Jose, CA</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="contact-btn">
              <FiSend /> Send Message
            </button>

            {/* STATUS MESSAGE */}
            {status && <p className="form-status">{status}</p>}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;