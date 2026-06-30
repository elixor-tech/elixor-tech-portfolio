"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Lightbulb, Award, Shield, Users, ArrowRight } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technologies and creative thinking to build future-ready solutions." },
  { icon: Award, title: "Excellence", desc: "Quality is engineered into everything we do — from code architecture to user experience." },
  { icon: Shield, title: "Reliability", desc: "Secure, scalable, and dependable systems you can trust, day one and beyond." },
  { icon: Users, title: "Partnership", desc: "We grow together with our clients, acting as a true technology partner, not just a vendor." },
];

const team = [
  { initials: "AH", name: "Ahmed Hassan", role: "CEO & Founder", bio: "Visionary leader with 10+ years in enterprise software and digital transformation." },
  { initials: "SK", name: "Sara Khan", role: "CTO", bio: "Full-stack architect specializing in scalable cloud systems and AI integration." },
  { initials: "MR", name: "Mike Rivera", role: "Design Lead", bio: "Award-winning UX designer passionate about human-centered, high-impact digital products." },
  { initials: "ZA", name: "Zara Ahmed", role: "AI Engineer", bio: "ML researcher and engineer building intelligent automation and data-driven products." },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "Elixor Tech was born with a mission to engineer excellence in every digital product." },
  { year: "2020", title: "First 20 Clients", desc: "Grew rapidly serving startups and mid-sized businesses across MENA and EU." },
  { year: "2022", title: "AI Division Launched", desc: "Expanded into AI/ML solutions, becoming a trusted partner for data-driven innovation." },
  { year: "2024", title: "Global Expansion", desc: "Opened offices across 3 continents and crossed 100+ successful project deliveries." },
  { year: "2025", title: "Excellence Award", desc: "Recognized as Top Emerging Tech Company by the Digital Innovation Council." },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="grid-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="section-label" variants={fadeUp} style={{ justifyContent: "center" }}>
              Who We Are
            </motion.div>
            <motion.h1 className="display-xl" variants={fadeUp}>
              Built by Builders, <br />
              <span className="text-gradient">For Builders</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ fontSize: "1.15rem", color: "var(--white-dim)", maxWidth: "560px", margin: "24px auto 0", lineHeight: 1.7 }}
            >
              We&apos;re a team of engineers, designers, and thinkers passionate about crafting
              digital products that make a lasting impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--bg-deep)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "80px" }}>
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative" }}
            >
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(135deg, rgba(0,104,255,0.1) 0%, rgba(122,0,255,0.1) 100%)",
                border: "1px solid rgba(0,104,255,0.2)",
                padding: "60px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}>
                {[
                  { icon: Target, label: "MISSION", text: "To deliver world-class digital products that combine engineering precision with creative innovation." },
                  { icon: Eye, label: "VISION", text: "To be the most trusted technology partner for businesses building the digital future." },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div className="icon-box" style={{ flexShrink: 0 }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "var(--blue-light)",
                        marginBottom: "8px",
                      }}>{label}</div>
                      <p style={{ fontSize: "0.95rem", color: "var(--white-dim)", lineHeight: 1.7 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Glow blob */}
              <div style={{
                position: "absolute",
                bottom: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(122,0,255,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label">Our Story</div>
              <h2 className="display-md" style={{ marginBottom: "24px" }}>
                Engineering <span className="text-gradient">Excellence</span> Since 2019
              </h2>
              <p style={{ color: "var(--white-dim)", lineHeight: 1.8, marginBottom: "20px" }}>
                Elixor Tech was founded with a single, bold conviction: that great software is not just
                about code — it&apos;s about understanding the human problems behind every project and
                solving them with precision and creativity.
              </p>
              <p style={{ color: "var(--white-dim)", lineHeight: 1.8, marginBottom: "36px" }}>
                From our first client to our 100th, we&apos;ve maintained an unwavering commitment to
                delivering products that are not just functional, but extraordinary. That&apos;s what
                &quot;Engineered for Excellence&quot; means to us.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>Our DNA</div>
            <h2 className="display-md">
              Core <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ padding: "36px 28px", textAlign: "center" }}
              >
                <motion.div
                  className="icon-box"
                  style={{ margin: "0 auto 20px", width: "64px", height: "64px" }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <val.icon size={26} />
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "12px" }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--white-dim)", lineHeight: 1.7 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--bg-deep)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "80px", alignItems: "flex-start" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label">Our Journey</div>
              <h2 className="display-md" style={{ marginBottom: "16px" }}>
                How We <span className="text-gradient">Got Here</span>
              </h2>
              <p style={{ color: "var(--white-dim)", lineHeight: 1.7 }}>
                From a lean startup to a full-scale digital engineering firm — every milestone shaped
                who we are today.
              </p>
            </motion.div>

            <div className="timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>The People</div>
            <h2 className="display-md">
              Meet the <span className="text-gradient">Team</span>
            </h2>
          </motion.div>

          <div className="grid-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass-card team-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="team-card-avatar">{member.initials}</div>
                <div className="team-card-name">{member.name}</div>
                <div className="team-card-role">{member.role}</div>
                <p className="team-card-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
