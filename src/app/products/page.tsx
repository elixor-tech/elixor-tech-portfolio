"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI", "Cloud"];

const projects = [
  {
    id: 1,
    title: "NexaCommerce Platform",
    category: "Web",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "A full-featured e-commerce platform handling 50K+ daily transactions with real-time inventory management.",
    gradient: "linear-gradient(135deg, #0068FF 0%, #00B4FF 100%)",
    featured: true,
  },
  {
    id: 2,
    title: "HealthSync Mobile App",
    category: "Mobile",
    tags: ["React Native", "Firebase", "HealthKit"],
    desc: "AI-powered health tracking app with personalized insights and doctor integration.",
    gradient: "linear-gradient(135deg, #7A00FF 0%, #A855F7 100%)",
    featured: false,
  },
  {
    id: 3,
    title: "SentimentAI Dashboard",
    category: "AI",
    tags: ["Python", "TensorFlow", "FastAPI"],
    desc: "Real-time sentiment analysis platform processing 1M+ social signals per day for brand monitoring.",
    gradient: "linear-gradient(135deg, #0068FF 0%, #7A00FF 100%)",
    featured: true,
  },
  {
    id: 4,
    title: "CloudOps Automation Suite",
    category: "Cloud",
    tags: ["AWS", "Terraform", "Kubernetes"],
    desc: "Infrastructure automation reducing deployment time by 80% for a Fortune 500 company.",
    gradient: "linear-gradient(135deg, #00B4FF 0%, #0068FF 100%)",
    featured: false,
  },
  {
    id: 5,
    title: "EduLearn LMS",
    category: "Web",
    tags: ["React", "Django", "Redis"],
    desc: "Scalable learning management system serving 200K+ students with video streaming and assessments.",
    gradient: "linear-gradient(135deg, #A855F7 0%, #7A00FF 100%)",
    featured: false,
  },
  {
    id: 6,
    title: "FinTrack Pro",
    category: "Mobile",
    tags: ["Flutter", "Plaid API", "ML"],
    desc: "Smart personal finance app with ML-powered spending insights and budget forecasting.",
    gradient: "linear-gradient(135deg, #0068FF 0%, #A855F7 100%)",
    featured: true,
  },
  {
    id: 7,
    title: "VisionAI Inspector",
    category: "AI",
    tags: ["Computer Vision", "PyTorch", "OpenCV"],
    desc: "Industrial quality control system using computer vision to detect defects with 99.2% accuracy.",
    gradient: "linear-gradient(135deg, #7A00FF 0%, #0068FF 100%)",
    featured: false,
  },
  {
    id: 8,
    title: "SecureVault Platform",
    category: "Cloud",
    tags: ["Zero Trust", "Vault", "GCP"],
    desc: "Enterprise security platform with zero-trust architecture protecting critical infrastructure.",
    gradient: "linear-gradient(135deg, #90E6FF 0%, #0068FF 100%)",
    featured: false,
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>Our Showcase</div>
            <h1 className="display-xl">
              Products That <br />
              <span className="text-gradient">Define Excellence</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--white-dim)", maxWidth: "520px", margin: "24px auto 0", lineHeight: 1.7 }}>
              Every product is a testament to our commitment to quality, innovation, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section" style={{ background: "var(--bg-deep)" }}>
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "60px" }}
          >
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab${activeFilter === cat ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <LayoutGroup>
            <motion.div
              layout
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "28px",
              }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                    className="glass-card"
                    style={{ overflow: "hidden" }}
                  >
                    {/* Project Visual */}
                    <div style={{
                      height: "200px",
                      background: project.gradient,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      {/* Abstract design element */}
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }} />
                      <div style={{
                        position: "relative",
                        textAlign: "center",
                        zIndex: 1,
                      }}>
                        <div style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "2.5rem",
                          fontWeight: 900,
                          color: "rgba(255,255,255,0.15)",
                          letterSpacing: "0.05em",
                        }}>
                          {project.id.toString().padStart(2, "0")}
                        </div>
                      </div>
                      {project.featured && (
                        <div style={{
                          position: "absolute",
                          top: "16px",
                          right: "16px",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          background: "rgba(0,0,0,0.4)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          fontSize: "0.7rem",
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "#fff",
                          backdropFilter: "blur(8px)",
                        }}>
                          FEATURED
                        </div>
                      )}
                      <div style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                      }}>
                        <span className="tag" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "28px" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--white-dim)", lineHeight: 1.7, marginBottom: "20px" }}>
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: "12px" }}>
                        <button style={{
                          display: "flex", alignItems: "center", gap: "6px",
                          padding: "8px 16px", borderRadius: "6px",
                          background: "rgba(0,104,255,0.1)", border: "1px solid rgba(0,104,255,0.2)",
                          color: "var(--blue-light)", fontSize: "0.8rem",
                          fontFamily: "var(--font-display)", fontWeight: 600,
                          letterSpacing: "0.06em", cursor: "pointer",
                          transition: "all 0.25s",
                        }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,104,255,0.2)";
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--blue-core)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,104,255,0.1)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,104,255,0.2)";
                          }}
                        >
                          <ExternalLink size={13} /> View
                        </button>
                        <button style={{
                          display: "flex", alignItems: "center", gap: "6px",
                          padding: "8px 16px", borderRadius: "6px",
                          background: "transparent", border: "1px solid rgba(226,235,253,0.1)",
                          color: "var(--white-dim)", fontSize: "0.8rem",
                          fontFamily: "var(--font-display)", fontWeight: 600,
                          letterSpacing: "0.06em", cursor: "pointer",
                          transition: "all 0.25s",
                        }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,235,253,0.3)";
                            (e.currentTarget as HTMLElement).style.color = "var(--white-soft)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(226,235,253,0.1)";
                            (e.currentTarget as HTMLElement).style.color = "var(--white-dim)";
                          }}
                        >
                          <Github size={13} /> Code
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ paddingBottom: "100px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="display-md" style={{ marginBottom: "20px" }}>
              Have a Project in Mind?
            </h2>
            <p style={{ color: "var(--white-dim)", marginBottom: "40px" }}>
              Let&apos;s build something exceptional together.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
