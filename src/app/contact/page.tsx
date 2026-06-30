"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "elixortechteam@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 316 5466366",
    sub: "Mon–Fri, 9am–6pm",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Remote",
    sub: "Global operations worldwide",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9AM – 6PM",
    sub: "Weekend: By appointment",
  },
];

const services = [
  "Web Development",
  "Mobile Application",
  "AI / Machine Learning",
  "Cloud Solutions",
  "UI/UX Design",
  "Digital Product",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are provided
    const hasEmailJS = serviceId && serviceId !== "your_service_id" &&
                       templateId && templateId !== "your_template_id" &&
                       publicKey && publicKey !== "your_public_key";

    if (hasEmailJS) {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              name: formState.name,
              email: formState.email,
              from_name: formState.name,
              from_email: formState.email,
              company: formState.company || "Not Provided",
              service: formState.service,
              title: formState.service || "General Inquiry",
              message: formState.message,
              time: new Date().toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              }),
              to_email: "elixortechteam@gmail.com",
            },
          }),
        });

        if (response.ok) {
          setSent(true);
        } else {
          const errorText = await response.text();
          throw new Error(`EmailJS failed: ${errorText}`);
        }
      } catch (err) {
        console.warn("EmailJS failed, falling back to mailto...", err);
        triggerMailtoFallback();
      } finally {
        setLoading(false);
      }
    } else {
      // Revert to mailto fallback if credentials are not configured in .env.local yet
      console.log("EmailJS credentials not configured in .env.local. Triggering mailto client...");
      triggerMailtoFallback();
      setLoading(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry — ${formState.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nService: ${formState.service}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:elixortechteam@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ paddingBottom: "60px" }}>
        <div className="page-hero-bg" />
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
            <h1 className="display-xl">
              Let&apos;s Build <span className="text-gradient">Together</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.7 }}>
              Tell us about your project. We&apos;ll get back to you within 24 hours with a plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: "var(--bg-deep)", paddingTop: "60px" }}>
        <div className="container">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "60px", alignItems: "flex-start" }}>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass-card" style={{ padding: "48px" }}>
                <div style={{ marginBottom: "36px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <MessageSquare size={20} color="var(--blue-core)" />
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700 }}>
                      Start a Project
                    </h2>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--white-dim)" }}>
                    Fill out the form and we&apos;ll respond with a tailored proposal.
                  </p>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: "center",
                      padding: "60px 20px",
                      borderRadius: "12px",
                      background: "rgba(0,104,255,0.08)",
                      border: "1px solid rgba(0,104,255,0.2)",
                    }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🚀</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginBottom: "12px" }}>Message Sent!</h3>
                    <p style={{ color: "var(--white-dim)", fontSize: "0.9rem" }}>
                      We&apos;ve received your inquiry. Expect a reply within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setFormState({ name: "", email: "", company: "", service: "", message: "" }); }}
                      className="btn btn-outline"
                      style={{ marginTop: "24px", fontSize: "0.8rem" }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                      <motion.div className="form-group" custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          className="form-input"
                          placeholder="John Smith"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </motion.div>
                      <motion.div className="form-group" custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          className="form-input"
                          placeholder="john@company.com"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </motion.div>
                    </div>

                    <motion.div className="form-group" custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label className="form-label" htmlFor="company">Company (Optional)</label>
                      <input
                        id="company"
                        type="text"
                        className="form-input"
                        placeholder="Your Company Name"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </motion.div>

                    <motion.div className="form-group" custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label className="form-label" htmlFor="service">Service Needed *</label>
                      <select
                        id="service"
                        className="form-input"
                        required
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        style={{ cursor: "pointer" }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} style={{ background: "var(--bg-card)", color: "var(--white-soft)" }}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div className="form-group" custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <label className="form-label" htmlFor="message">Project Details *</label>
                      <textarea
                        id="message"
                        className="form-textarea"
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                      style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem", padding: "16px", opacity: loading ? 0.7 : 1 }}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                      {loading ? "Sending..." : "Send Message"} <Send size={16} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <div className="section-label">Contact Info</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>
                  We&apos;re Here to <span className="text-gradient">Help</span>
                </h2>
                <p style={{ color: "var(--white-dim)", lineHeight: 1.7, marginBottom: "32px" }}>
                  Whether you have a question, a project idea, or just want to say hello — our
                  team is ready to engage.
                </p>
              </div>

              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="icon-box" style={{ flexShrink: 0 }}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--white-faint)", marginTop: "2px" }}>{info.sub}</div>
                  </div>
                </motion.div>
              ))}

              {/* Map-like visual */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                style={{
                  marginTop: "8px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,104,255,0.15)",
                  height: "180px",
                  background: "linear-gradient(135deg, rgba(0,104,255,0.06) 0%, rgba(122,0,255,0.06) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Abstract map grid */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "linear-gradient(rgba(0,104,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,104,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }} />
                <div style={{ position: "relative", textAlign: "center" }}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <MapPin size={32} color="var(--blue-core)" />
                  </motion.div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    color: "var(--white-dim)",
                    marginTop: "8px",
                    background: "rgba(0,4,15,0.8)",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,104,255,0.2)",
                  }}>
                    REMOTE / GLOBAL
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
