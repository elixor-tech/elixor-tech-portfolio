"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Applications", href: "/services" },
    { label: "AI & Machine Learning", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com/elixor-tech", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "0" }}>
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/logo.png" alt="Elixor Tech" width={40} height={40} />
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em" }}>
                ELIXOR <span style={{ color: "var(--blue-core)" }}>TECH</span>
              </div>
            </Link>
            <p>
              Engineered for Excellence. We build scalable, secure, and smart digital products
              that drive real business growth.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,104,255,0.1)",
                    border: "1px solid rgba(0,104,255,0.2)",
                    color: "var(--white-dim)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,104,255,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--blue-core)";
                    (e.currentTarget as HTMLElement).style.color = "var(--blue-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,104,255,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,104,255,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "var(--white-dim)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="footer-heading">{section}</h4>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Elixor Tech. All rights reserved.</span>
          <span style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em", fontSize: "0.75rem" }}>
            ENGINEERED FOR EXCELLENCE
          </span>
        </div>
      </div>
    </footer>
  );
}
