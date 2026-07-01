"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function TermsPage() {
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
            <div className="section-label" style={{ justifyContent: "center" }}>Legal Center</div>
            <h1 className="display-md">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p style={{ fontSize: "0.95rem", color: "var(--white-dim)", marginTop: "16px" }}>
              Last updated: June 29, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "40px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <motion.div
            className="glass-card glass-card-padded light-card"
            style={{ lineHeight: "1.8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", borderBottom: "1px solid rgba(0,107,255,0.15)", paddingBottom: "16px" }}>
              <ShieldCheck size={28} color="var(--blue-light)" />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>Agreement to Terms</h2>
            </div>

            <p style={{ marginBottom: "24px" }}>
              Welcome to Elixor Tech. These Terms of Service govern your use of our website, services, and digital products. By accessing our services, you agree to be bound by these terms.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginTop: "32px", marginBottom: "16px" }}>1. Intellectial Property</h3>
            <p style={{ marginBottom: "24px" }}>
              All contents, design systems, layouts, codebases, graphics, logos, and digital products developed by Elixor Tech are protected by international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or modify any materials without express written authorization.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginTop: "32px", marginBottom: "16px" }}>2. Use of Services</h3>
            <p style={{ marginBottom: "24px" }}>
              You agree to use our digital assets and consulting services only for lawful purposes. Any unauthorized access, cybernetic attacks, injection scripts, or scraping of our secure endpoints is strictly prohibited.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginTop: "32px", marginBottom: "16px" }}>3. Project Agreements</h3>
            <p style={{ marginBottom: "24px" }}>
              Specific consulting terms, timelines, deliveries, and payment schedules are governed by individual client Service Level Agreements (SLAs). These terms act as a baseline for public interactions.
            </p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", marginTop: "32px", marginBottom: "16px" }}>4. Limitation of Liability</h3>
            <p style={{ marginBottom: "24px" }}>
              Elixor Tech shall not be liable for any indirect, incidental, or consequential damages resulting from database downtime, deployment rollbacks, or third-party cloud service disruptions.
            </p>

            <div style={{ marginTop: "48px", borderTop: "1px solid rgba(0,107,255,0.15)", paddingTop: "24px", textAlign: "center" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--white-faint)" }}>
                Questions about our Terms? Please contact us at hello@elixor-tech.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
