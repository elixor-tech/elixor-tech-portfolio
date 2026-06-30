"use client";
import { motion } from "framer-motion";

const tech = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow",
  "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "GraphQL",
  "React Native", "Flutter", "Redis", "Tailwind CSS",
];

export default function TechMarquee() {
  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid rgba(0,104,255,0.08)", borderBottom: "1px solid rgba(0,104,255,0.08)", background: "var(--bg-deep)", overflow: "hidden" }}>
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-display)", letterSpacing: "0.18em", color: "var(--white-faint)", textTransform: "uppercase" }}>
          Technologies We Master
        </p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...tech, ...tech].map((t, i) => (
            <div key={i} className="marquee-item">
              <span style={{
                padding: "8px 20px",
                borderRadius: "100px",
                background: "rgba(0,104,255,0.08)",
                border: "1px solid rgba(0,104,255,0.15)",
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "var(--white-dim)",
              }}>
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
