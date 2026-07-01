"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Brain, Cloud, Package, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance web apps built with modern frameworks, optimized for speed and scalability.",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile experiences that feel native on iOS and Android.",
    number: "02",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent solutions powered by cutting-edge AI models and custom ML pipelines.",
    number: "03",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Robust cloud infrastructure, DevOps automation, and serverless architecture at scale.",
    number: "04",
  },
  {
    icon: Package,
    title: "Digital Products",
    desc: "End-to-end digital product development from ideation to launch and beyond.",
    number: "05",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Stunning interfaces and seamless user experiences crafted with precision.",
    number: "06",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="display-lg" style={{ maxWidth: "400px" }}>
              Our Core <span className="text-gradient">Services</span>
            </h2>
          </div>
          <Link href="/services" className="btn btn-outline" style={{ flexShrink: 0 }}>
            All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="service-card-number">{service.number}</div>
              <div className="icon-box">
                <service.icon size={22} />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <div className="service-card-arrow">
                Learn More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
