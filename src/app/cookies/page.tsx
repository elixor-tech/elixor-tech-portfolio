"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiesPage() {
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
            <div className="section-label" style={{ justifyContent: "center" }}>Tracking & Preferences</div>
            <h1 className="display-md">
              Cookie <span className="text-gradient">Policy</span>
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
              <Cookie size={28} color="var(--blue-light)" />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#fff" }}>Cookie & Storage Disclosure</h2>
            </div>

            <p style={{ marginBottom: "24px" }}>
              This Cookie Policy describes how Elixor Tech utilizes cookies, beacons, and local browser storage to optimize user experience, remember sessions, and analyze portfolio traffic.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>1. What Are Cookies?</h3>
            <p style={{ marginBottom: "24px" }}>
              Cookies are small text structures saved locally by your browser. They enable digital websites to maintain state, speed up rendering speeds, and analyze anonymous traffic flows.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>2. Types of Cookies We Use</h3>
            <p style={{ marginBottom: "24px" }}>
              We utilize <strong>Necessary Cookies</strong> to run session logs and secure form tokens, alongside <strong>Analytics Cookies</strong> (like Google Analytics) to aggregate anonymous viewport metrics.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#fff", marginTop: "32px", marginBottom: "16px" }}>3. Managing Preferences</h3>
            <p style={{ marginBottom: "24px" }}>
              You can configure your browser settings to completely disable cookie tracking. Note that blocking essential cookies may affect form submission reliability.
            </p>

            <div style={{ marginTop: "48px", borderTop: "1px solid rgba(0,107,255,0.15)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--white-faint)" }}>
                Questions on our Cookie policy? Contact us at info@elixor-tech.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
