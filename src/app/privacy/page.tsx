"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: "40px" }}>
        <div className="page-hero-bg" />
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.75rem", marginBottom: "32px" }}>
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="section-label" style={{ justifyContent: "center" }}>Security & Consent</div>
            <h1 className="display-md">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p style={{ fontSize: "0.95rem", color: "var(--white-dim)", marginTop: "16px" }}>
              Last updated: June 29, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-deep)", paddingTop: "40px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <motion.div
            className="glass-card"
            style={{ padding: "48px", lineHeight: "1.8", color: "var(--white-dim)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", borderBottom: "1px solid rgba(0,107,255,0.15)", paddingBottom: "16px" }}>
              <Lock size={28} color="var(--blue-light)" />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff" }}>Data Protection Protocol</h2>
            </div>

            <p style={{ marginBottom: "24px" }}>
              At Elixor Tech, we value your privacy above all. This Privacy Policy details how we collect, store, and process your personal information when you interface with our consulting forms or digital systems.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>1. Information We Collect</h3>
            <p style={{ marginBottom: "24px" }}>
              When you submit a project proposal through our Contact page, we collect your name, email, company, and message body. This information is purely used to evaluate product proposals and initiate project dialogue.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>2. How We Secure Data</h3>
            <p style={{ marginBottom: "24px" }}>
              We implement industry-standard database encryption protocols (TLS/SSL) and zero-trust firewall configurations to protect your communication logs against unauthorized breach or infiltration.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>3. Sharing Information</h3>
            <p style={{ marginBottom: "24px" }}>
              Elixor Tech does not sell, lease, or lease-to-own your user profiles, email databases, or logs to third-party marketing entities. Your data remains fully secure.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>4. Your Rights</h3>
            <p style={{ marginBottom: "24px" }}>
              Under applicable digital privacy statutes (GDPR/CCPA), you retain the right to query, access, modify, or completely erase any email data we store.
            </p>

            <div style={{ marginTop: "48px", borderTop: "1px solid rgba(0,107,255,0.15)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--white-faint)" }}>
                Have questions on privacy? Reach our team at privacy@elixor-tech.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
