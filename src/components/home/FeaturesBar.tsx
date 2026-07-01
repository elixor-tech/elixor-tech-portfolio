"use client";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, UserCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Enterprise-grade security you can trust.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    desc: "Built to scale with your business.",
  },
  {
    icon: Zap,
    title: "Innovative",
    desc: "Cutting-edge solutions for modern challenges.",
  },
  {
    icon: UserCheck,
    title: "Reliable",
    desc: "We deliver quality you can rely on.",
  },
];

export default function FeaturesBar() {
  return (
    <section className="features-bar-section">
      <div className="container">
        <div className="features-bar-grid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="feature-bar-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="feature-bar-icon-box">
                <feat.icon size={22} />
              </div>
              <div className="feature-bar-content">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
