"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Elixor Tech specialize in?",
    answer: "We specialize in end-to-end digital engineering, including custom Web Development (React/Next.js), Cross-platform Mobile Applications (Flutter/React Native), AI & Machine Learning pipelines (TensorFlow/PyTorch), and scalable Cloud Architectures (AWS/DevOps).",
  },
  {
    question: "How long does a typical digital product build take?",
    answer: "A standard Minimum Viable Product (MVP) ranges from 6 to 10 weeks depending on complexity. Full-scale enterprise applications or custom AI integrations generally span 3 to 6 months with iterative agile sprint deliveries.",
  },
  {
    question: "Do you offer post-deployment support and maintenance?",
    answer: "Yes, we provide robust Service Level Agreements (SLAs) offering 24/7 server monitoring, performance optimization, vulnerability patching, and ongoing feature updates to keep your systems running at peak condition.",
  },
  {
    question: "What technology stack do you recommend for scaling?",
    answer: "We strongly recommend Next.js and Node.js/TypeScript for high-performance web frontends and backends, combined with relational databases like PostgreSQL and containerized cloud setups on AWS using Docker and Kubernetes.",
  },
  {
    question: "How does the engagement and billing process work?",
    answer: "We work on either a fixed-scope project contract or monthly sprint-based dedicated resource team retainers. Engagement begins with a detailed discovery phase to compile product requirements before coding starts.",
  },
];

function FAQItem({ question, answer, isOpen, toggleOpen }: { question: string; answer: string; isOpen: boolean; toggleOpen: () => void }) {
  return (
    <div
      className="glass-card"
      style={{
        marginBottom: "16px",
        overflow: "hidden",
        border: isOpen ? "1px solid rgba(0, 107, 255, 0.45)" : "1px solid rgba(0, 107, 255, 0.15)",
        boxShadow: isOpen ? "var(--glow-card-hover)" : "none",
      }}
    >
      <button
        onClick={toggleOpen}
        style={{
          width: "100%",
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.98rem",
          fontWeight: 600,
          color: isOpen ? "var(--blue-light)" : "var(--white-soft)",
          transition: "color 0.3s",
        }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={18} color={isOpen ? "var(--blue-light)" : "var(--white-dim)"} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div style={{
              padding: "0 28px 28px",
              fontSize: "0.92rem",
              color: "var(--white-dim)",
              lineHeight: 1.7,
              borderTop: "1px solid rgba(0, 107, 255, 0.1)",
              paddingTop: "16px",
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" style={{ background: "var(--bg-deep)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>FAQ</div>
          <h2 className="display-md">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p style={{ color: "var(--white-dim)", marginTop: "16px", fontSize: "0.95rem" }}>
            Got questions? We have compiled responses to common inquiries regarding our engineering workflow.
          </p>
        </div>

        {/* Accordions */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
