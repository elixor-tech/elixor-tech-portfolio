"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Smartphone, Brain, Cloud, Package, Palette,
  CheckCircle2, ArrowRight, Search, Code, Rocket, BarChart3
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "We architect and build high-performance web applications using React, Next.js, and modern full-stack technologies. From MVPs to enterprise platforms, we deliver production-ready code.",
    features: ["React / Next.js / Vue", "REST & GraphQL APIs", "Performance Optimization", "SEO & Accessibility"],
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps that feel native. We build with React Native and Flutter for seamless iOS and Android experiences that users love.",
    features: ["iOS & Android", "React Native / Flutter", "Offline-first Architecture", "Push Notifications"],
    number: "02",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Unlock the power of artificial intelligence. We design, train, and deploy custom ML models and intelligent automation systems tailored to your business needs.",
    features: ["Custom ML Models", "NLP & Computer Vision", "Data Pipelines", "Model Deployment"],
    number: "03",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Scalable, resilient cloud infrastructure built for growth. We design and manage AWS, GCP, and Azure environments with full DevOps automation.",
    features: ["AWS / GCP / Azure", "CI/CD Pipelines", "Kubernetes & Docker", "Cost Optimization"],
    number: "04",
  },
  {
    icon: Package,
    title: "Digital Products",
    desc: "End-to-end digital product development — from initial concept and market research through design, development, launch, and iteration.",
    features: ["Product Strategy", "Agile Sprints", "Market Validation", "Growth Analytics"],
    number: "05",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, functional interfaces designed with users at the center. We create design systems, prototypes, and pixel-perfect implementations.",
    features: ["Figma Design Systems", "User Research", "Wireframes & Prototypes", "Motion Design"],
    number: "06",
  },
];

const process = [
  { icon: Search, step: "01", title: "Discover", desc: "Deep-dive into your goals, users, and competitive landscape to define the right solution." },
  { icon: Palette, step: "02", title: "Design", desc: "Create wireframes, prototypes, and design systems that make your product both beautiful and usable." },
  { icon: Code, step: "03", title: "Build", desc: "Engineer robust, scalable systems with clean code, automated testing, and rigorous QA." },
  { icon: Rocket, step: "04", title: "Deploy", desc: "Launch with confidence using CI/CD pipelines, cloud infrastructure, and real-time monitoring." },
  { icon: BarChart3, step: "05", title: "Grow", desc: "Iterate based on data and user feedback to continuously improve and expand your product." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>What We Offer</div>
            <h1 className="display-xl">
              Services Built for <br />
              <span className="text-gradient">Real Impact</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", maxWidth: "520px", margin: "24px auto 0", lineHeight: 1.7 }}>
              From strategy to execution, we provide end-to-end digital engineering services
              that transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: "var(--bg-deep)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="glass-card service-horizontal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                style={{ padding: "48px", display: "grid", gridTemplateColumns: "1fr 2fr 1.5fr", gap: "48px", alignItems: "center" }}
              >
                {/* Left: Number + Icon */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, background: "var(--grad-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "20px" }}>
                    {service.number}
                  </div>
                  <div className="icon-box" style={{ margin: "0 auto", width: "64px", height: "64px" }}>
                    <service.icon size={28} />
                  </div>
                </div>

                {/* Middle: Title + Desc */}
                <div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px", color: "var(--white-soft)" }}>
                    {service.title}
                  </h2>
                  <p style={{ color: "var(--white-dim)", lineHeight: 1.8, marginBottom: "24px" }}>
                    {service.desc}
                  </p>
                  <Link href="/contact" className="btn btn-outline" style={{ fontSize: "0.8rem", padding: "10px 24px" }}>
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right: Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--white-dim)" }}>
                      <CheckCircle2 size={16} color="var(--blue-core)" style={{ flexShrink: 0 }} />
                      {feat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>How We Work</div>
            <h2 className="display-md">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p style={{ color: "var(--white-dim)", maxWidth: "480px", margin: "20px auto 0", lineHeight: 1.7 }}>
              A proven, transparent process that delivers exceptional outcomes every time.
            </p>
          </motion.div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", position: "relative" }}>
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{ position: "relative", padding: "0 16px" }}
              >
                {i < process.length - 1 && (
                  <div className="process-step-connector" />
                )}
                <div className="process-step-num">
                  <step.icon size={24} />
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  color: "var(--blue-light)",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}>
                  STEP {step.step}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--white-dim)", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "var(--bg-deep)", paddingBottom: "80px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="display-md" style={{ marginBottom: "20px" }}>
              Ready to Start? <span className="text-gradient">Let&apos;s Talk.</span>
            </h2>
            <p style={{ color: "var(--white-dim)", marginBottom: "40px", fontSize: "1.05rem" }}>
              Tell us about your project and we&apos;ll engineer the right solution.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: "1rem", padding: "16px 48px" }}>
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
