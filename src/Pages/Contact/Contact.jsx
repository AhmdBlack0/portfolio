import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import "./Contact.css"; // ✅ import css file

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Not Working Yet.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Have a question, collaboration idea, or just want to say hi?  
        Fill out the form or reach out via my social links below.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">
          <Send size={18} /> Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://github.com/AhmdBlack0"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={28} />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={28} />
        </a>
        <a href="mailto:ahmdBlack.0@gmail.com" >
          <Mail size={28} />
        </a>
      </div>
    </section>
  );
}
