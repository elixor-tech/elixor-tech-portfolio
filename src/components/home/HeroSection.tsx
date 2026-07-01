"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket, Briefcase } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" ref={ref} style={{ paddingBottom: "70px" }}>
      <div className="grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Animated grid lines */}
      <GridAnimation />

      <motion.div className="container" style={{ y, opacity }}>
        <div className="hero-grid">
          {/* Left: Content */}
          <div className="hero-content">
            <h1 className="hero-title" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block", color: "#FFF" }}
              >
                WE ENGINEER
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient"
                style={{ display: "block" }}
              >
                DIGITAL EXCELLENCE
              </motion.span>
            </h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{ fontSize: "1.05rem" }}
            >
              We build scalable, secure and smart digital products that drive real business growth.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href="/services" className="btn btn-primary" style={{ padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <Rocket size={16} /> OUR SERVICES <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn btn-outline" style={{ padding: "14px 36px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <Briefcase size={16} /> VIEW PORTFOLIO <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{ marginTop: "64px" }}
            >
              <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-display)", letterSpacing: "0.15em", color: "var(--white-faint)", marginBottom: "16px" }}>
                TRUSTED BY INNOVATIVE COMPANIES
              </p>
              <div style={{ display: "flex", gap: "36px", flexWrap: "wrap", alignItems: "center" }}>
                {["echo", "kanba", "UTOSIA", "cloudforce", "VOLTEX"].map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + i * 0.08 }}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "rgba(226, 235, 240, 0.4)",
                    }}
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Visual Redesign */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
              {/* Outer 3D space SVG: Pedestal, Orbits, and Dotted Globe */}
              <svg
                viewBox="0 0 440 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 15px rgba(0, 107, 255, 0.12))",
                }}
              >
                <defs>
                  <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e2c4a" />
                    <stop offset="100%" stopColor="#080f21" />
                  </linearGradient>
                  <radialGradient id="spaceGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 107, 255, 0.16)" />
                    <stop offset="100%" stopColor="rgba(0, 4, 15, 0)" />
                  </radialGradient>
                  <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Central spatial glow */}
                <circle cx="220" cy="180" r="160" fill="url(#spaceGlow)" />

                {/* 3D METALLIC PEDESTAL PLATFORM */}
                <g>
                  {/* Base Ring shadow */}
                  <ellipse cx="220" cy="326" rx="116" ry="28" fill="rgba(0, 0, 0, 0.6)" />
                  
                  {/* Platform Base Cylindrical height */}
                  <path d="M 104 316 L 104 330 A 116 26 0 0 0 336 330 L 336 316 Z" fill="url(#pedestalGrad)" stroke="rgba(0, 107, 255, 0.18)" strokeWidth="1.5" />
                  
                  {/* Bottom platform top ellipse rim */}
                  <ellipse cx="220" cy="316" rx="116" ry="26" fill="#0d172e" stroke="rgba(0, 107, 255, 0.25)" strokeWidth="1.5" />
                  
                  {/* Pulsing Neon Light Loop */}
                  <motion.ellipse
                    cx="220"
                    cy="313"
                    rx="98"
                    ry="21"
                    stroke="var(--blue-light)"
                    strokeWidth="2.5"
                    fill="none"
                    filter="url(#neonGlow)"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "220px 313px" }}
                  />

                  {/* Upper elevated cylinder step */}
                  <path d="M 124 300 L 124 310 A 96 20 0 0 0 316 310 L 316 300 Z" fill="#060c1b" stroke="rgba(0, 230, 255, 0.15)" strokeWidth="1" />
                  
                  {/* Upper pedestal top surface */}
                  <ellipse cx="220" cy="300" rx="96" ry="20" fill="#080e1e" stroke="rgba(0, 230, 255, 0.35)" strokeWidth="1.5" />
                  <ellipse cx="220" cy="300" rx="84" ry="16" fill="#03060c" />
                </g>
              </svg>

              {/* Floating brand logo above pedestal (percentage-scaled HTML Next Image - Static/Large) */}
              <div
                style={{
                  position: "absolute",
                  left: "-20%",
                  top: "-28%",
                  width: "140%",
                  height: "140%",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  filter: "drop-shadow(0 0 35px rgba(0, 107, 255, 0.7)) drop-shadow(0 0 70px rgba(0, 230, 255, 0.4))",
                }}
              >
                <Image
                  src="/EX_logo.png"
                  alt="Elixor Tech EX Emblem Logo"
                  width={480}
                  height={480}
                  priority
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slanted Curved Divider sweeps up from left to right */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", height: "120px", overflow: "hidden", zIndex: 5, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: "relative", display: "block", width: "100%", height: "100%" }}>
          <path d="M0,120 C480,125 960,85 1440,30 L1440,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}

function GridAnimation() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "1px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, rgba(0,104,255,0.06), transparent)",
            left: `${(i + 1) * 8.33}%`,
          }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
