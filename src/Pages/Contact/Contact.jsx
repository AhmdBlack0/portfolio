import { useState } from "react";
import { Mail, Linkedin, Github, Send, Check, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ahmdBlack.0@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:ahmdBlack.0@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setStatus("Opening your email client...");
    setTimeout(() => {
      setStatus("");
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="px-6 py-12 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 light:bg-teal-50 text-teal-400 light:text-teal-700 border border-teal-500/30 light:border-teal-200 mb-3">
            Contact Me
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight">
            Let’s Build Something Great Together
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed">
            Have a question, a project in mind, or an opportunity you’d like to discuss? Drop a message below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white shadow-lg">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 light:text-teal-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 light:text-zinc-900">Email Directly</h3>
                  <p className="text-xs text-zinc-400 light:text-zinc-500">ahmdBlack.0@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  href="mailto:ahmdBlack.0@gmail.com"
                  className="flex-1 py-2 px-3 text-center text-xs font-semibold rounded-xl bg-teal-500 hover:bg-teal-600 text-white transition-colors"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2 px-3 text-xs font-semibold rounded-xl border border-zinc-700 light:border-zinc-300 bg-zinc-800 light:bg-zinc-100 text-zinc-200 light:text-zinc-800 hover:bg-zinc-700 light:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white shadow-lg space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 light:text-sky-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 light:text-zinc-900">Location</h3>
                  <p className="text-xs text-zinc-400 light:text-zinc-500">Egypt (UTC+2)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/60 light:border-zinc-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 light:text-indigo-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 light:text-zinc-900">Availability</h3>
                  <p className="text-xs text-zinc-400 light:text-zinc-500">Open for Freelance & Full-time</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white shadow-lg">
              <h3 className="text-sm font-semibold text-zinc-100 light:text-zinc-900 mb-3">Professional Profiles</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AhmdBlack0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-950/60 light:bg-zinc-100 text-xs font-semibold text-zinc-300 light:text-zinc-700 hover:text-teal-400 hover:border-teal-500 transition-all flex-1 justify-center"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-950/60 light:bg-zinc-100 text-xs font-semibold text-zinc-300 light:text-zinc-700 hover:text-teal-400 hover:border-teal-500 transition-all flex-1 justify-center"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white shadow-2xl">
              <h2 className="text-xl font-bold text-zinc-100 light:text-zinc-900 mb-6">
                Send a Direct Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 light:text-zinc-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-950/80 light:bg-zinc-50 text-zinc-100 light:text-zinc-900 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 light:text-zinc-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-950/80 light:bg-zinc-50 text-zinc-100 light:text-zinc-900 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 light:text-zinc-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project, requirements, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-950/80 light:bg-zinc-50 text-zinc-100 light:text-zinc-900 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>

                {status && (
                  <p className="text-center text-xs text-teal-400 light:text-teal-600 font-medium pt-2">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
