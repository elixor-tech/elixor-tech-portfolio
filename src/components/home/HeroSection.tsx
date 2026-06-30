"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["WE", "ENGINEER", "DIGITAL", "EXCELLENCE"];
  const accentWords = ["DIGITAL", "EXCELLENCE"];

  return (
    <section className="hero" ref={ref}>
      <div className="grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Animated grid dots */}
      <GridAnimation />

      <motion.div className="container" style={{ y, opacity }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
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
              <Link href="/services" className="btn btn-primary" style={{ padding: "14px 36px" }}>
                Our Services
              </Link>
              <Link href="/products" className="btn btn-outline" style={{ padding: "14px 36px" }}>
                View Portfolio
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

          {/* Right: 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          >
            <div style={{
              position: "relative",
              width: "420px",
              height: "420px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* Isometric 3D Cybernetic Wireframe Cube Matrix */}
              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <svg
                  width="440"
                  height="440"
                  viewBox="0 0 440 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: "drop-shadow(0 0 25px rgba(0, 107, 255, 0.25))",
                  }}
                >
                  <defs>
                    <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00E6FF" />
                      <stop offset="50%" stopColor="#006BFF" />
                      <stop offset="100%" stopColor="#7A00FF" />
                    </linearGradient>
                    <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(0, 107, 255, 0.15)" />
                      <stop offset="100%" stopColor="rgba(0, 4, 15, 0)" />
                    </radialGradient>
                  </defs>

                  {/* Inner glow field */}
                  <circle cx="220" cy="220" r="180" fill="url(#glowGrad)" />

                  {/* Isometric grid overlay */}
                  <g opacity="0.12">
                    <line x1="40" y1="220" x2="400" y2="220" stroke="var(--blue-light)" strokeWidth="1" />
                    <line x1="220" y1="40" x2="220" y2="400" stroke="var(--blue-light)" strokeWidth="1" />
                    {/* Diagonal traces */}
                    <path d="M 120 48 L 320 392 M 320 48 L 120 392" stroke="var(--blue-light)" strokeWidth="0.75" />
                  </g>

                  {/* Main Isometric Cube Faces */}
                  <g stroke="url(#cyberGrad)" strokeWidth="1.75" opacity="0.8">
                    {/* Top Face */}
                    <path d="M 220 120 L 320 178 L 220 236 L 120 178 Z" />
                    {/* Left Face */}
                    <path d="M 120 178 L 220 236 L 220 348 L 120 290 Z" />
                    {/* Right Face */}
                    <path d="M 220 236 L 320 178 L 320 290 L 220 348 Z" />
                  </g>

                  {/* Inner nested cube */}
                  <g stroke="url(#cyberGrad)" strokeWidth="1" opacity="0.5" strokeDasharray="3,3">
                    <path d="M 220 155 L 280 190 L 220 225 L 160 190 Z" />
                    <path d="M 160 190 L 220 225 L 220 295 L 160 260 Z" />
                    <path d="M 220 225 L 280 190 L 280 260 L 220 295 Z" />
                  </g>

                  {/* Grid Node Points */}
                  <g fill="var(--blue-light)">
                    <circle cx="220" cy="120" r="4.5" />
                    <circle cx="320" cy="178" r="4.5" />
                    <circle cx="220" cy="236" r="4.5" />
                    <circle cx="120" cy="178" r="4.5" />
                    <circle cx="120" cy="290" r="4.5" />
                    <circle cx="220" cy="348" r="4.5" />
                    <circle cx="320" cy="290" r="4.5" />
                  </g>

                  {/* Orbital lines */}
                  <motion.ellipse
                    cx="220"
                    cy="220"
                    rx="190"
                    ry="95"
                    stroke="var(--purple-mid)"
                    strokeWidth="1"
                    opacity="0.3"
                    style={{ transformOrigin: "220px 220px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.ellipse
                    cx="220"
                    cy="220"
                    rx="150"
                    ry="75"
                    stroke="var(--blue-core)"
                    strokeWidth="1"
                    opacity="0.25"
                    style={{ transformOrigin: "220px 220px" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              {/* Center logo glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "relative",
                  zIndex: 2,
                  filter: "drop-shadow(0 0 30px rgba(0,104,255,0.6)) drop-shadow(0 0 60px rgba(122,0,255,0.3))",
                }}
              >
                <Image src="/logo.png" alt="Elixor Tech" width={160} height={160} priority />
              </motion.div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const topOffset = (Math.sin((deg * Math.PI) / 180) * 145 - 4).toFixed(3);
                const leftOffset = (Math.cos((deg * Math.PI) / 180) * 145 - 4).toFixed(3);
                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: i % 2 === 0 ? "var(--blue-core)" : "var(--purple-mid)",
                      boxShadow: `0 0 12px ${i % 2 === 0 ? "var(--blue-core)" : "var(--purple-mid)"}`,
                      top: `calc(50% + ${topOffset}px)`,
                      left: `calc(50% + ${leftOffset}px)`,
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-display)", letterSpacing: "0.15em", color: "var(--white-faint)" }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} color="var(--white-faint)" />
        </motion.div>
      </motion.div>
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
            background: "linear-gradient(to bottom, transparent, rgba(0,104,255,0.1), transparent)",
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
