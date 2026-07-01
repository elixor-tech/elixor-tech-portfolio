"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "VP of Product",
    company: "NexaCommerce",
    feedback: "Elixor Tech engineered our entire e-commerce infrastructure from scratch. The system is incredibly fast, handling our peak traffic without a single hiccup. Truly a team of excellent builders.",
    rating: 5,
    initials: "MV",
  },
  {
    id: 2,
    name: "Dr. Sarah Jenkins",
    role: "Founder",
    company: "HealthSync",
    feedback: "We partnered with Elixor Tech to build our AI medical tracking app. They combined design precision with cutting-edge ML models, delivering a product that exceeded our expectations.",
    rating: 5,
    initials: "SJ",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Head of Marketing",
    company: "SentimentAI",
    feedback: "Elixor Tech's data pipelines and real-time dashboard transformed how we monitor global brand signals. Their technical skills and product ownership are unmatched.",
    rating: 5,
    initials: "ER",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Director of Infrastructure",
    company: "CloudOps",
    feedback: "The DevOps automation and Kubernetes migration executed by Elixor Tech reduced our release cycles by 80%. They are a core partner in our technology stack.",
    rating: 5,
    initials: "DM",
  },
  {
    id: 5,
    name: "Amina Al-Mansoor",
    role: "Managing Director",
    company: "EduLearn",
    feedback: "Elixor Tech built a highly scalable video learning platform for our 200K+ students. The user experience is flawless, and the backend architecture is bulletproof.",
    rating: 5,
    initials: "AA",
  },
  {
    id: 6,
    name: "Liam O'Connor",
    role: "Co-Founder",
    company: "FinTrack",
    feedback: "From wireframes to final deployment, Elixor Tech worked hand-in-hand with us to launch our fintech app. Their engineering precision is second to none.",
    rating: 5,
    initials: "LO",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section section-light" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Client Success</div>
          <h2 className="display-md">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p style={{ color: "var(--white-dim)", marginTop: "16px", fontSize: "0.95rem", maxWidth: "540px", margin: "16px auto 0" }}>
            Read reviews from technology leaders and founders who partnered with Elixor Tech to build the digital future.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="responsive-grid-360">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              className="glass-card glass-card-padded light-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{ position: "relative" }}
            >
              {/* Quote Icon Background Decorator */}
              <div style={{ position: "absolute", top: "28px", right: "28px", opacity: 0.08, color: "var(--blue-light)" }}>
                <Quote size={40} />
              </div>

              {/* Rating stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array.from({ length: test.rating }).map((_, index) => (
                  <Star key={index} size={15} fill="var(--blue-light)" color="var(--blue-light)" />
                ))}
              </div>

              <p style={{ fontSize: "0.92rem", color: "var(--white-dim)", lineHeight: 1.7, marginBottom: "28px" }}>
                &quot;{test.feedback}&quot;
              </p>

              {/* Client Profile */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", borderTop: "1px solid rgba(0,107,255,0.1)", paddingTop: "20px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--grad-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#fff",
                }}>
                  {test.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    {test.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem" }}>
                    <span className="testimonial-role">{test.role}</span>, <span style={{ color: "#64748B" }}>{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
