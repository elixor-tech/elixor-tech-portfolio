"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABlock() {
  return (
    <section className="section" style={{ overflow: "hidden" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            borderRadius: "24px",
            padding: "80px 64px",
            background: "linear-gradient(135deg, rgba(0,104,255,0.15) 0%, rgba(122,0,255,0.15) 100%)",
            border: "1px solid rgba(0,104,255,0.25)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* BG glow */}
          <div style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(0,104,255,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "24px",
              background: "conic-gradient(from 0deg, transparent 80%, rgba(0,104,255,0.3) 90%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "rgba(0,104,255,0.15)",
              border: "1px solid rgba(0,104,255,0.3)",
              marginBottom: "24px",
              fontSize: "0.8rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.1em",
              color: "var(--blue-light)",
            }}>
              <Zap size={12} />
              START YOUR PROJECT TODAY
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}>
              Ready to Build Something <br />
              <span className="text-gradient">Extraordinary?</span>
            </h2>

            <p style={{
              fontSize: "1.1rem",
              color: "var(--white-dim)",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}>
              Let&apos;s turn your vision into a powerful digital product. Our team is ready to
              engineer excellence for your business.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.9rem", padding: "16px 40px" }}>
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Learn About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
